var rootNode = document.getElementById("root");

function branchCreation(info) {
    var result = "";
    for (var key in info) {
        if (typeof(info[key]) == 'object') {
            if(key == "children"){
                result = result +`<ul style="display: none">`;
                result = result + branchCreation(info[key]);
                result = result + "</ul></li>";
            }
            else {
                result = result +  branchCreation(info[key]);
            }
        }
        else if(key == "folder"=== true || info[key] === true) {
            if( info["children"] === null || info["children"] === false) {
                result = result + `<li><a href="#"><i class="material-icons initial">folder</i>${info["title"]}</a>
                <ul class="empty-directory"><li>Folder is empty</li></ul></li>`;
            }
            else {
                result = result + `<li><a href="#"><i class="material-icons initial">folder</i>${info["title"]}</a>`;
            }
        }
        else if( key=="title" && info['folder'] !== true ) {
            result = result + `<li><a href="#"><i class="material-icons content">insert_drive_file</i>${info[key]}</a></li>`;
        }
    }
    return result;
}

var list = document.createElement('ul');
list.innerHTML = branchCreation(structure);
var directory = list.querySelectorAll("a");
for (var i=0; i< directory.length; i++) {
	directory[i].onclick = function() {
        if(this.nextElementSibling) {
            if(this.nextElementSibling.tagName == "UL"){
                if(this.nextElementSibling.style.display == "block") {
                    this.nextElementSibling.style.display = "none";
                    this.querySelector("i").innerText = "folder";
                }
                else {
                    this.nextElementSibling.style.display = "block";
                    this.querySelector("i").innerText = "folder_open";
                }
            }
        }
    }
}

rootNode.appendChild(list);
