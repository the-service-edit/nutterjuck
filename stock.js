/* ============================================================
   NUTTERJUCK LURES — colourways + availability

   Reads stock.json and renders the colourway selector, the
   availability line, the hero image swap and the Snipcart
   buy button on every product page, plus the availability
   line on each shop-grid card.

   You should never need to edit this file to change stock.
   Edit stock.json instead.
   ============================================================ */
(function () {
  'use strict';

  var CSS = [
    '.colours{display:flex;flex-direction:column;gap:.7rem}',
    '.swatches{display:flex;gap:.6rem;flex-wrap:wrap}',
    '.swatch{font-family:"Archivo",sans-serif;font-size:.7rem;letter-spacing:.18em;text-transform:uppercase;',
    'background:#fff;color:#000;border:1.5px solid #000;padding:.7rem 1rem;cursor:pointer;',
    'transition:background .25s ease,color .25s ease}',
    '.swatch[aria-pressed="true"]{background:#000;color:#fff}',
    '.swatch[disabled]{opacity:.32;cursor:not-allowed;text-decoration:line-through}',
    '.stock{font-size:.66rem;letter-spacing:.22em;text-transform:uppercase;opacity:.6}',
    '.stock.low{opacity:1;font-weight:600}',
    '.stock.out{opacity:1;font-weight:600}',
    '.colour-single{font-size:.9rem;font-weight:500;letter-spacing:.02em}',
    '.shown{position:absolute;left:0;bottom:0;color:#fff;opacity:.45;font-size:.62rem;',
    'letter-spacing:.26em;text-transform:uppercase;padding:1rem 1.2rem;pointer-events:none}',
    '.buy[disabled]{opacity:.4;cursor:not-allowed}',
    '.buy[disabled]:hover{color:#fff}',
    '.buy[disabled]:hover::before{transform:translateY(101%)}',
    '.card-stock{font-size:.62rem;letter-spacing:.24em;text-transform:uppercase;opacity:.55;margin-top:.15rem}',
    '.card-stock.out{opacity:1;font-weight:600}'
  ].join('');

  function injectCss() {
    var s = document.createElement('style');
    s.textContent = CSS;
    document.head.appendChild(s);
  }

  /* ---------- availability wording ---------- */

  function line(stock, colour, multi) {
    var where = multi ? ' in ' + colour : '';
    if (stock <= 0) return 'Sold out' + where;
    if (stock === 1) return 'Last one' + where;
    return 'Only ' + stock + ' left' + where;
  }

  function cardLine(total) {
    if (total <= 0) return 'Sold out';
    if (total === 1) return 'Last one';
    return total + ' available';
  }

  /* ---------- product page ---------- */

  function renderProduct(root, data) {
    var variants = (data && data.variants) || [];
    if (!variants.length) return;

    var multi = variants.length > 1;
    var host = root.querySelector('[data-colours]');
    var mainImage = root.querySelector('#mainImage');
    var shownLine = root.querySelector('.shown');
    var buyButton = root.querySelector('#buyButton');
    var buyLabel = buyButton ? buyButton.textContent.trim() : '';

    /* build the block */
    if (host) {
      host.className = 'colours';
      host.innerHTML = '';

      var label = document.createElement('span');
      label.className = 'eyebrow';
      label.textContent = 'Colourway';
      host.appendChild(label);

      if (multi) {
        var group = document.createElement('div');
        group.className = 'swatches';
        group.setAttribute('role', 'group');
        group.setAttribute('aria-label', 'Choose a colourway');
        variants.forEach(function (v, i) {
          var b = document.createElement('button');
          b.className = 'swatch';
          b.type = 'button';
          b.textContent = v.colour;
          b.setAttribute('aria-pressed', String(i === 0));
          if (v.stock <= 0) {
            b.disabled = true;
            b.title = 'Sold out';
          }
          b.addEventListener('click', function () {
            select(i);
          });
          group.appendChild(b);
        });
        host.appendChild(group);
      } else {
        var only = document.createElement('span');
        only.className = 'colour-single';
        only.textContent = variants[0].colour;
        host.appendChild(only);
      }

      var stockEl = document.createElement('span');
      stockEl.className = 'stock';
      host.appendChild(stockEl);

      if (data.note) {
        var note = document.createElement('span');
        note.className = 'stock';
        note.textContent = data.note;
        host.appendChild(note);
      }
    }

    function select(i) {
      var v = variants[i];
      var swatches = host ? host.querySelectorAll('.swatch') : [];
      Array.prototype.forEach.call(swatches, function (b, n) {
        b.setAttribute('aria-pressed', String(n === i));
      });

      if (mainImage && v.image) {
        mainImage.src = v.image;
        mainImage.alt = (data.name || document.title.split('—')[0].trim()) +
          (multi ? ' in ' + v.colour : '');
      }
      if (shownLine) shownLine.textContent = 'Shown in ' + v.colour;

      var stockEl = host ? host.querySelector('.stock') : null;
      if (stockEl) {
        stockEl.textContent = line(v.stock, v.colour, multi);
        stockEl.className = 'stock' + (v.stock <= 0 ? ' out' : (v.stock <= 2 ? ' low' : ''));
      }

      if (buyButton) {
        buyButton.setAttribute('data-item-custom1-name', 'Colour');
        buyButton.setAttribute('data-item-custom1-options',
          variants.map(function (x) { return x.colour; }).join('|'));
        buyButton.setAttribute('data-item-custom1-value', v.colour);
        buyButton.setAttribute('data-item-custom1-required', 'true');
        if (v.image) buyButton.setAttribute('data-item-image', v.image);

        if (v.stock <= 0) {
          buyButton.classList.remove('snipcart-add-item');
          buyButton.disabled = true;
          buyButton.textContent = 'Sold out';
        } else {
          buyButton.classList.add('snipcart-add-item');
          buyButton.disabled = false;
          buyButton.textContent = buyLabel;
        }
      }
    }

    /* open on the first colour that is actually in stock */
    var first = 0;
    for (var i = 0; i < variants.length; i++) {
      if (variants[i].stock > 0) { first = i; break; }
    }
    select(first);
  }

  /* ---------- shop grid ---------- */

  function renderGrid(data) {
    var cards = document.querySelectorAll('.card[data-product]');
    Array.prototype.forEach.call(cards, function (card) {
      var d = data[card.getAttribute('data-product')];
      if (!d || !d.variants) return;

      var total = d.variants.reduce(function (n, v) { return n + (v.stock || 0); }, 0);
      var el = card.querySelector('.card-stock');
      if (!el) {
        el = document.createElement('span');
        el.className = 'card-stock';
        var meta = card.querySelector('.meta') || card;
        meta.appendChild(el);
      }
      el.textContent = cardLine(total);
      if (total <= 0) el.className = 'card-stock out';

      if (total <= 0) {
        var btn = card.querySelector('.buy');
        if (btn) {
          btn.classList.remove('snipcart-add-item');
          btn.disabled = true;
          btn.textContent = 'Sold out';
        }
      }
    });
  }

  /* ---------- boot ---------- */

  function boot(data) {
    injectCss();
    var root = document.querySelector('[data-product].product');
    if (root) renderProduct(root, data[root.getAttribute('data-product')]);
    renderGrid(data);
  }

  function start() {
    fetch('stock.json', { cache: 'no-store' })
      .then(function (r) { return r.json(); })
      .then(boot)
      .catch(function () { /* leave the page as served */ });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
