# NutterJuck — Product Photography Prompt

**Reference file. Not published to the site.**
(GitHub Pages runs Jekyll, which excludes any folder starting with `_`, so this
stays in the repo but never appears on the live site.)

---

## The studio standard

The **OG Bass Clicking Walker** shot is the reference set. Every lure should be
photographed the same way:

- Seamless black infinity background
- Polished glossy black acrylic surface
- Real optical reflection beneath the lure
- Same camera height, distance and framing
- Square crop (1254 × 1254 or larger)

Save shots as `products/<lure-slug>-01.png`, `-02.png` etc.
For colourways, use `products/<lure-slug>-<colour>.png` (e.g. `bass-wakebait-black.png`).

---

## The prompt

> **PRODUCT PHOTOGRAPHY — ABSOLUTE PRODUCT + STUDIO LOCK**
>
> Use the uploaded product image as the ONLY source of truth for the product.
> Use the uploaded studio image as the ONLY source of truth for the environment.
>
> This is a commercial product photography task.
> It is NOT a redesign.
> It is NOT a recreation.
> It is NOT a reinterpretation.
> It is NOT a new render.
> This is a **product replacement task**.
>
> Imagine the studio photograph already exists.
> Remove only the original product.
> Photograph the uploaded product inside that exact studio without changing anything else.
>
> ---
>
> **PRODUCT LOCK (NON-NEGOTIABLE)**
>
> The uploaded product is immutable.
> Do NOT redesign it. Do NOT regenerate it. Do NOT approximate it. Do NOT improve it.
> Do NOT beautify it. Do NOT reconstruct it.
> Treat the uploaded product as if it were a museum object that cannot be altered.
>
> Preserve EXACTLY:
> overall dimensions · body proportions · silhouette · geometry · curves · edges ·
> corners · surface profile · paint finish · gloss level · colours · gradients ·
> reflections already present on the product · logos · signatures · printed markings ·
> decals · eyelets · split rings · wire forms · hook hangers · hardware · screws ·
> blades · blade thickness · blade angle · blade position · blade orientation ·
> every treble hook · hook count · hook size · hook shape · hook orientation ·
> hook spacing · hook finish · hook attachment points · manufacturing imperfections ·
> scratches · wear marks · every tiny physical detail
>
> Do not invent components. Do not remove components. Do not simplify components.
> Do not replace hardware. Do not clean the product. Do not sharpen the geometry.
> Do not smooth surfaces. Do not alter any physical feature.
>
> ---
>
> **POSITION LOCK**
>
> The product pose must remain identical.
> Preserve: rotation · viewing angle · perspective · tilt · orientation ·
> hardware positions · spacing between components · relationship between every part.
> Nothing attached to the lure may move independently.
>
> ---
>
> **STUDIO LOCK (NON-NEGOTIABLE)**
>
> The uploaded studio reference is NOT inspiration. It is the actual photography studio.
> Everything about the studio must remain identical.
>
> Preserve EXACTLY:
> seamless black infinity background · pure black backdrop · glossy black acrylic surface ·
> reflection beneath the lure · reflection brightness · reflection softness ·
> reflection position · amount of negative space · composition · framing ·
> camera height · camera distance · camera angle · lens perspective
>
> Do NOT redesign the studio. Do NOT change the composition. Do NOT crop differently.
> Do NOT zoom differently. Do NOT reposition the product within the frame.
>
> The final image should look as though the photographer simply swapped the lure
> while leaving the camera on the tripod.
>
> ---
>
> **SURFACE LOCK**
>
> The lure sits on a polished glossy black acrylic surface.
> Preserve exactly: gloss level · reflectivity · reflection sharpness · reflection falloff.
>
> Do NOT replace the surface. No stone. No concrete. No slate. No timber. No texture.
> No water droplets. No dust. No scratches. No debris.
>
> ---
>
> **LIGHTING LOCK**
>
> Replicate the studio lighting exactly.
> Preserve: key light position · fill light · rim light · highlight placement ·
> highlight size · highlight intensity · specular reflections · shadow softness ·
> shadow direction · black point · exposure · contrast · white balance.
>
> Do NOT create: HDR lighting · cinematic lighting · dramatic lighting ·
> golden hour lighting · stylised lighting · CGI reflections.
>
> Lighting should be visually indistinguishable from the studio reference.
>
> ---
>
> **CAMERA LOCK**
>
> Replicate the exact camera used for the studio image.
> Preserve: focal length · perspective · field of view · camera elevation ·
> camera rotation · framing · composition · depth of field · focus plane.
>
> It should appear the same photographer simply replaced the lure.
>
> ---
>
> **REALISM LOCK**
>
> Create premium commercial product photography.
> Ultra high-end advertising photography. Optical realism. Professional studio lighting.
> Natural lens rendering. Real optical reflections. Accurate material response.
>
> No CGI appearance. No AI appearance. No stylisation. No illustration.
> No painterly rendering. No fantasy lighting. No artificial geometry.
>
> The final image should be indistinguishable from a photograph captured in a
> professional product photography studio.
>
> ---
>
> **FAILURE CONDITIONS**
>
> The image is incorrect if ANY of the following occur:
> hook count changes · hook size changes · hook orientation changes · split rings change ·
> blade angle changes · blade shape changes · hardware changes · screws change ·
> body proportions change · silhouette changes · geometry changes · logo moves ·
> signature changes · reflections are painted instead of optical · product is regenerated ·
> product is approximated · product is cleaned · product is beautified ·
> camera angle changes · framing changes · reflection changes · studio changes ·
> background changes · surface changes
>
> If preserving the product conflicts with the requested scene, ALWAYS preserve the product.
>
> The uploaded product is the physical object.
> The uploaded studio image is the physical photography setup.
> Only the world around the product may change.
> The product itself must remain absolutely identical.

---

## Read this before you rely on it

Be clear-eyed about what this prompt can and can't do, because the failure mode
is expensive.

**Generative image models do not composite — they re-render.** There is no
mechanism inside a diffusion model that copies your pixels across. Every
"DO NOT ALTER" instruction above is a request the architecture cannot actually
guarantee. It will *try*, and it will get close, and it will still quietly
redraw the thing.

What it gets wrong, in order of likelihood:

1. **The signature.** It becomes signature-*shaped* squiggle. On a signed,
   hand-numbered lure, the signature is the product.
2. **Hook count and orientation.** Trebles get added, dropped, or rotated.
3. **The bib angle and split rings.** Small hardware is where models hallucinate most.

A buyer paying $55–$100 for a handmade lure is buying *this exact object*.
If the photo shows a subtly different object, that is a refund, a bad review,
and — at worst — a misleading-advertising problem.

**Use this prompt for:** mood boards, packaging mockups, social backgrounds,
concept work, anything not sold as a literal depiction of the item.

**Do not use it for:** the actual product page photo.

**The reliable path is the one you're already on:** the Clicking Walker shot
proves you own the set. Black acrylic sheet, black backdrop, same light, same
tripod position. Shoot every lure on it. Ten minutes per lure, zero risk,
and the whole range looks like one brand.

If a shot ends up on the wrong background, the fix is **compositing** (cut the
real pixels out, place them on the real backdrop) — not generation. That
preserves the object exactly, which is the entire point of the prompt above.
