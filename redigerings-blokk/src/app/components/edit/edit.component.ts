import { Component } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {

  newSection() {
    let doc = document.getElementById('doc-container');


    //the previous form is turned into a section
    let oldInputTitle = (document.getElementById('title') as HTMLInputElement).value;
    let oldInputContent = (document.getElementById('content') as HTMLInputElement).value;

    let oldTitle = document.getElementById('title');
    let oldContent = document.getElementById('content');
    
    oldTitle.remove();
    oldContent.remove();

    let newSection = document.createElement('section');
    let h2Title = document.createElement('h2');
    let pContent = document.createElement('p');

    h2Title.innerHTML = oldInputTitle;
    pContent.innerHTML = oldInputContent;

    newSection.appendChild(h2Title);
    newSection.appendChild(pContent);

    if (doc != null) {
      doc.appendChild(newSection);
    } else {
      alert('Error');
    }
    

    //The elements get created
    let form = document.createElement('form');
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
  
    //The elements get assigned their ids
    form.id = 'input';
    title.id = 'title';
    content.id = 'content';

    del.id = 'delete';
    save.id = 'save';
    create.id = 'create';

    //The buttons gets their innerHTML added
    del.innerHTML = "Slett"
    save.innerHTML = "Lagre"
    create.innerHTML = "Lag"

    //The buttons get appended into the btn-container
    btnContainer.appendChild(create);
    btnContainer.appendChild(save);
    btnContainer.appendChild(del);

    //The elements get appended into the form
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

