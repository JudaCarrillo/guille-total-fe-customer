import { Component } from '@angular/core';

@Component({
  selector: 'app-drop-shadow',
  templateUrl: './drop-shadow.component.html',
  styleUrls: ['./drop-shadow.component.scss'],
})
export class DropShadowComponent {
  isModalVisible = false;

  toggleModal() {
    this.isModalVisible = !this.isModalVisible;
  }
}
