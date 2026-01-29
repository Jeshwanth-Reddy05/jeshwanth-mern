// Assignment 3: Application Settings Controller

const settings = {
  theme: "light",
  notifications: true,
  autoSave: false,
  language: "en"
};
//toggle seeting theme
settings.theme=settings.theme === "light"?"dark":"light"
console.log(settings.theme)
//updating autosave to false
settings.autoSave=false;
console.log(settings.autoSave)

//deleting the notification using delete
delete settings.notifications;

//frezzing can be done useing Object.freze() -> no modification can be done 
Object.freeze(settings)