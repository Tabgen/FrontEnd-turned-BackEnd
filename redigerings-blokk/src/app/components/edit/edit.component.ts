import { Component } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {

  newSection() {
    //The elements get created
    let form = document.createElement('form');
    let title = document.createElement('input');
    let content = document.createElement('textarea');

    let del = document.createElement('button');
    let save = document.createElement('button');
    let create = document.createElement('button');
    
    //The elements get assigned their classnames
    form.className = 'input';
    title.className = 'title';
    content.className = 'content';

    del.className = 'btn';
    del.className = 'btnDelete';

    save.className = 'btn';
    save.className = 'btnSave';

    create.className = 'btn';
    create.className = 'btnCreate';

    //The elements get assigned their ids
    form.id = '?';
    title.id = '?';
    content.id = '?';

    del.id = '?';
    save.id = '?';
    create.id = '?';

    //The buttons gets their innerHTML added
    del.innerHTML = "Slett"
    save.innerHTML = "Lagre"
    create.innerHTML = "Lag"

    //The elements get appended into the form

    form.appendChild(title);
    form.appendChild(content);
    form.appendChild(del);
    form.appendChild(save);
    form.appendChild(create);

    //The form gets appended to the page

    let doc = document.getElementById('doc-container');
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

