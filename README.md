
# Personal web site with Angular 17 and Github Pages

This is an example of how to deploy your personal web application with Angular 17 and Github Pages.


## Installation

clone the project and run the following command to install the dependencies

```bash
  npm install
```
Build your Angular project using the following command:

```bash
  ng build --configuration production
```
## Deployment

To deploy any project in Github page with Angular 17, it is necessary to create a repository with this structure:

<username>.github.io

Now, in your Angular project’s angular.json file, set the outputPath to "dist":

```json
"projects": {
  "your-project-name": {
    "architect": {
      "build": {
        "options": {
          "outputPath": "dist"
        }
      }
    }
  }
}
```

When you are ready to deploy your application, run the following command:

```bash
  ng deploy --repo=https://github.com/<username>/<username>.github.io.git --name="<username>"
```

In my case is:

```bash
  ng deploy --repo=https://github.com/<username>/<username>.github.io.git --name="<username>"
```