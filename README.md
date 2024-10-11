<div style="text-align:center">
    <img src="https://thumbs2.imgbox.com/66/0a/TyYtOS9r_t.png" alt="código café"/>
</div>

# Código café 
## Pasos iniciales (clonar repositorio):

1) Haz clic en el botón: <>Code.
2) Copia el link del repositorio.
3) En tu PC, crea una capeta con el nombre que quieras.
4) Entra dentro de esa carpeta.
5) En un espacio vacío, mantén presionada la tecla Shift y haz clic.
6) Elije: "Abrir ventana de PowerShell aquí".
7) Escribe: git clone y pega la dirección que copiaste. En nuestro caso, quedaría:
```bash
 git clone https://github.com/Leonardo-Valtorta/codigo-cafe.git.
```
8) Sin salir del PowerShell, escribe: 
```bash
 cd codigo-cafe
```
9) Luego escribe:
```bash
 npm install
```

## Ejecutar el servidor de desarrollo

```bash
 npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) con tu navegador para ver los resultados.

## Comandos de Git:
### Crear ramas
```bash
 git branch <nombre-de-la-rama>
 ```
Ej: Git branch Navbar

### Visualización de ramas
```bash
 git branch
 ```
### Cambiar de ramas
```bash
 git checkout <nombre-de-la-rama>
 ```
Ej: Git branch Main

### Ver el estado de la rama actual
```bash
 git status
 ```
Esto nos sirve para:
* Ver si la rama actual está actualizada.
* Si hay algo para confirmar, enviar o recibir (pull).
* Si hay archivos en preparación (staged), sin preparación(unstaged) o que no están recibiendo seguimiento (untracked).
* Si hay archivos creados, modificados o eliminados.

### Agregar archivos (o cambios que se han hecho) al Staging area
```bash
 git add .
 ```
### Establecer un Commit
```bash
 git commit -m "mensaje incicando que fue lo que se hizo en ese commit"
 ```
### Subir los cambios al repositorio
Esto nos sirve para subir los cambios de la rama actual local a la rama correspondiente remota con el mismo nombre.
```bash
 git push 
 ```
 Para subir cambios de una rama específica diferente a la actual, debes especificarla:
 Por ejemplo:
 ```bash
 git push origin <nombre-de-la-rama>
 ```
### Traer desde el repositorio los cambios que se han hecho
```bash
 git pull 
 ```
 Por ejemplo, si quieres obtener los cambios de la rama "feature" del remoto "origin":
```bash
 git pull origin feature
```

### Fusionar ramas

<img src="https://img.icons8.com/?size=48&id=5tH5sHqq0t2q&format=png" alt="Exclmacioin" />

:warning:PRECAUCIÓN!!!:warning:

Cuando ya hayas completado el desarrollo de tu proyecto en tu rama y todo funcione correctamente, el último paso es fusionar la rama con su rama padre. Esto se hace con el comando git merge.

Git merge básicamente integra las características de tu rama con todos los commits realizados a la rama master (o a la rama que decidas fusionar lo que hiciste).

```bash
 git merge
 ```

<div style="color: #BABABA">
<h2>Otros datos:</h2>

Este proyecto usa [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) para optimizar y cargar automáticamente Inter, una fuente personalizada de Google.
</div>
