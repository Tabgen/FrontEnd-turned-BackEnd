import { Component, Output, EventEmitter } from '@angular/core';
import { Info } from '../../Info';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  @Output() onAddText: EventEmitter<Info> = new EventEmitter();
  id?: string;
  title: string;
  text: string;

  make() {
    let doc = document.getElementById('doc-container');
    
    //the previous form is turned into a section
    let oldInputTitle = (document.getElementById('title') as HTMLInputElement).value;
    let oldInputContent = (document.getElementById('content') as HTMLInputElement).value;
  
    let oldTitle = document.getElementById('title');
    let oldContent = document.getElementById('content');
    let oldBtns = document.getElementById('btn-container');
    let oldExplanation = document.getElementById('explanation');
    let oldCreate = document.getElementById('create');

    if (oldTitle != null) {
      oldTitle.remove();
    }

    if (oldContent != null) {
      oldContent.remove();
    }

    if (oldBtns != null) {
      oldBtns.remove();
    } 

    if (oldExplanation != null) {
      oldExplanation.remove();
    }

    if(oldCreate != null) {
      oldCreate.remove();
    }

    let newSection = document.createElement('section');
    let h3Title = document.createElement('h3');
    let pContent = document.createElement('p');

    h3Title.innerHTML = oldInputTitle;
    pContent.innerHTML = oldInputContent;

    //checks if the id is available and assigns a availbale id to the section

    for ( let i = 1; 1 < 100; i++ ) {
      let sectionID = "SEC-" + i;
      let test = document.getElementById(sectionID);
      if (test != null) {
      } else {
          newSection.id = sectionID;
          break;
      }
    }

    
    let secID = newSection.id;
    console.log(secID);


    newSection.appendChild(h3Title);
    newSection.appendChild(pContent);

    if (doc != null) {
      doc.appendChild(newSection);
    } else {
      alert('Error');
    }

    const newText: Info = {
      id: secID,
      title: oldInputTitle,
      text: oldInputContent,
    };

    this.onAddText.emit(newText);

    
  };

  newSection() {
    let doc = document.getElementById('doc-container');
    let oldTitle = document.getElementById('title');
    //the previous form is turned into a section
    if (oldTitle != null) {
      let doc = document.getElementById('doc-container');
      
      //the previous form is turned into a section
      let oldInputTitle = (document.getElementById('title') as HTMLInputElement).value;
      let oldInputContent = (document.getElementById('content') as HTMLInputElement).value;
  
      let oldTitle = document.getElementById('title');
      let oldContent = document.getElementById('content');
      let oldBtns = document.getElementById('btn-container');
      let oldExplanation = document.getElementById('explanation');
      let oldCreate = document.getElementById('create');
  
      if (oldTitle != null) {
        oldTitle.remove();
      }
  
      if (oldContent != null) {
        oldContent.remove();
      }
  
      if (oldBtns != null) {
        oldBtns.remove();
      } 
  
      if (oldExplanation != null) {
        oldExplanation.remove();
      }
  
      if(oldCreate != null) {
        oldCreate.remove();
      }
  
      let newSection = document.createElement('section');
      let h3Title = document.createElement('h3');
      let pContent = document.createElement('p');
  
      h3Title.innerHTML = oldInputTitle;
      pContent.innerHTML = oldInputContent;
  
      //checks if the id is available and assigns a availbale id to the section  
  
      for ( let i = 1; 1 < 100; i++ ) {
        let sectionID = "SEC-" + i;
        let test = document.getElementById(sectionID);
        if (test != null) {
        } else {
            newSection.id = sectionID;
            break;
        }
    }
      newSection.appendChild(h3Title);
      newSection.appendChild(pContent);
  
      if (doc != null) {
        doc.appendChild(newSection);
      } else {
        alert('Error');
      }

    } 


    

    

    //The elements get created
    let form = document.createElement('form');
    let explanation = document.createElement('h1');
    let title = document.createElement('input');
    let content = document.createElement('textarea');

    let del = document.createElement('button');
    let save = document.createElement('button');
    let create = document.createElement('button');
    
    let btnContainer = document.createElement('div');

    //The elements get assigned their classnames
    form.className = 'input';
    title.className = 'title';
    content.className = 'content';
    btnContainer.className = 'btn-container';

    del.className = 'btn';
    del.className = 'btn';
    del.classList.add('btnDelete');

    save.className = 'btn';
    save.classList.add('btnSave');


    create.className = 'btn';
    create.classList.add('btnCreate');


    //The elements get their attributes assigned
    content.setAttribute('cols', '30');
    content.setAttribute('rows', '10');
    content.setAttribute('placeholder', 'Content');

    title.setAttribute('placeholder', 'Title');
    
    del.style.display = 'none';
    save.style.display = 'none';
    create.addEventListener("click", make);
    
    //The make function is repeated her so that the event listener can reach it
    function make() {
      let doc = document.getElementById('doc-container');
      
      //the previous form is turned into a section
      let oldInputTitle = (document.getElementById('title') as HTMLInputElement).value;
      let oldInputContent = (document.getElementById('content') as HTMLInputElement).value;
  
      let oldTitle = document.getElementById('title');
      let oldContent = document.getElementById('content');
      let oldBtns = document.getElementById('btn-container');
      let oldExplanation = document.getElementById('explanation');
      let oldCreate = document.getElementById('create');
  
      if (oldTitle != null) {
        oldTitle.remove();
      }
  
      if (oldContent != null) {
        oldContent.remove();
      }
  
      if (oldBtns != null) {
        oldBtns.remove();
      } 
  
      if (oldExplanation != null) {
        oldExplanation.remove();
      }
  
      if(oldCreate != null) {
        oldCreate.remove();
      }
  
      let newSection = document.createElement('section');
      let h3Title = document.createElement('h3');
      let pContent = document.createElement('p');
  
      h3Title.innerHTML = oldInputTitle;
      pContent.innerHTML = oldInputContent;
  
      //checks if the id is available and assigns a availbale id to the section
  
      for ( let i = 1; 1 < 100; i++ ) {
        let sectionID = "SEC-" + i;
        let test = document.getElementById(sectionID);
        if (test != null) {

        } else {
            console.log(sectionID);
            newSection.id = sectionID;
            break;
        }
    }
      newSection.appendChild(h3Title);
      newSection.appendChild(pContent);
  
      if (doc != null) {
        doc.appendChild(newSection);
      } else {
        alert('Error');
      }
    };

    //The elements get assigned their ids
    form.id = 'input';
    explanation.id = 'explanation';
    title.id = 'title';
    content.id = 'content';

    del.id = 'delete';
    save.id = 'save';
    create.id = 'create';

    //The buttons gets their innerHTML added
    del.innerHTML = "Slett"
    save.innerHTML = "Lagre"
    create.innerHTML = "Lagre"

    //The buttons get appended into the btn-container
    btnContainer.appendChild(create);
    btnContainer.appendChild(save);
    btnContainer.appendChild(del);

    //The elements get appended into the form
    form.appendChild(explanation);
    form.appendChild(title);
    form.appendChild(content);
    form.appendChild(btnContainer);


    //The form gets appended to the page
    if (doc != null) {
      doc.appendChild(form);
    } else {
      alert('Error');
    }
  }

  storeData() {
    //gets the input data from the form
    let inputTitle = (document.getElementById('title-placeholder') as HTMLInputElement).value;
    let inputContent = (document.getElementById('content-placeholder') as HTMLInputElement).value;
    


  }


}

