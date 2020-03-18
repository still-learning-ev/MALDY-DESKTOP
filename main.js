const electron = require('electron');
const url=require('url');
const path=require('path');


//bring the app and the browserwindow from the electron
const {app,BrowserWindow, Menu}=electron;

let mainWindow;
let addWindow;

//listen for app to be ready
app.on('ready',function(){
    //create new window
    mainWindow=new BrowserWindow({  
        webPreferences: {
            nodeIntegration: true
        }
      });
    //load html file into the window
    mainWindow.loadURL(url.format({
        pathname:path.join(__dirname,'gui/frontpage.html'),
        protocol:'file:',
        slashes:true
    }));
    //quit app when closed
    mainWindow.on('closed', function(){
        app.quit();
    });
    //create menu from template
    const mainMenu= Menu.buildFromTemplate(mainMenuTemplate);
    //insert menu
    Menu.setApplicationMenu(mainMenu);
});

// handel create add window
function createaddwindow(){
     //create new window
     addWindow=new BrowserWindow({
        width:300,
        height:200,
        title:'Add Shopping Item'
     });
     //load html file into the window
     addWindow.loadURL(url.format({
         pathname:path.join(__dirname,'addwindow.html'),
         protocol:'file:',
         slashes:true
     }));
     //garbage collection handle 
     addWindow.on('close',function(){
         addWindow=null;
     })
}


//create menu template

const mainMenuTemplate=[
    {
        label:'File',
        submenu:[
            {
                label:'Add Item',
                click(){
                    createaddwindow();
                }
            },
            {
                label:'Clear Items'
            },
            {
                label:'Quit',
                accelerator:'ctrl+Q',
                click(){
                    app.quit();
                }
            }
        ]
    }
];

// add developer tools
if(process.env.NODE_ENV !=='production'){
    mainMenuTemplate.push({
        label:'developer tools',
        submenu:[
            {
                label:'toggle devtools',
                click(item, focusedWindow){
                    focusedWindow.toggleDevTools();
                }
            },
            {
                role: 'reload'
            }
        ]
    });
}

// another linking the file with the python file
