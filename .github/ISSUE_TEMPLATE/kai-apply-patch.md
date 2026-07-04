---
name: "Kai Apply Patch"
about: Aplica un parche generado por Kai (desde el chat)
title: "Apply patch: <breve descripción>"
labels: ["kai", "chatops"]
assignees: []
---

Pega debajo el parche en un bloque de código marcado como `patch` o `diff` y deja **un comentario** con `/apply-patch` para ejecutarlo.

**Ejemplo**:

```patch
diff --git a/src/example.ts b/src/example.ts
index 0000000..1111111 100644
--- a/src/example.ts
+++ b/src/example.ts
@@ -1,3 +1,4 @@
 export function hello(){ 
   return "world"
 }
+export const added = true;
```
