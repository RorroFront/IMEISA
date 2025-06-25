# IMEISA
Página web para IMEISA
[https://imeisa-mx.com/](https://imeisa.web.app/)


--ESTRUCTURA DEL PROYECTO--


IMEISA/
├── public/
│   ├── favicon/
│   ├── assets/
│   │   ├── machinery-logos/
│   │   ├── i18n/
│   │   ├── PDF/
│   │   └── logos/
│
├── src/
│   ├── app/
│   │   ├── layout/
│   │   │   ├── contact/
│   │   │   ├── us/
│   │   │   ├── ourservices/
│   │   │   └── clients/
│   │   ├── header/
│   │   └── footer/


Enrutamiento con <router-outlet> y relación con los componentes hijos:

Dentro de este componente layout, el <router-outlet> actúa como un espacio dinámico donde Angular renderiza los componentes correspondientes a rutas hijas, permitiendo cambiar solo esa parte de la página según la navegación.
Los demás componentes <app-ourservices>, <app-clients>, <app-contact> (y el comentado <app-us>) son componentes estáticos que siempre se muestran dentro del landing, ya que están directamente incluidos en la plantilla.

Esto significa que:

    Las secciones fijas como servicios, clientes y contacto permanecen visibles en todo momento dentro de la landing.

    El contenido que cambia según la navegación (rutas hijas) se carga dentro del <router-outlet> sin afectar ni recargar estas secciones.

    El <router-outlet> permite agregar o cambiar vistas específicas que se muestran además de estos componentes fijos, manteniendo la estructura principal intacta.

En resumen, el layout es la base visual constante, mientras que el <router-outlet> permite modularidad y dinamismo para cargar vistas adicionales sin perder las secciones permanentes definidas con los selectores <app-*>.

![IMEISA_TREE](https://github.com/user-attachments/assets/5aba8f2e-5db9-4e62-9a29-ac3045241dbb)

# 📦 IMEISA

Aplicación web desarrollada con [Angular](https://angular.io/) 

## 🚀 Tecnologías utilizadas

- [Angular CLI](https://angular.io/cli) 🌐
- [TypeScript](https://www.typescriptlang.org/) 🧠
- [TailwindCSS](https://tailwindcss.com/) (opcional) 🎨
- [Firebase](https://firebase.google.com/) (si aplica) 🔥
- [Angular Universal (SSR)](https://angular.io/guide/universal) 🛰️
- [ngx-translate](https://github.com/ngx-translate/core)  🌍

## 🛠️ Instalación

```bash
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo
npm install
