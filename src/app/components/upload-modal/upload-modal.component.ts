import { Component } from '@angular/core';
import { ModalController, IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-upload-modal',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './upload-modal.component.html',
  styleUrls: ['./upload-modal.component.scss'],
})
export class UploadModalComponent {
  selectedFile: File | null = null;

  constructor(private modalCtrl: ModalController) {}

  onFileChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      this.selectedFile = target.files[0];
    }
  }

  uploadFile() {
    if (this.selectedFile) {
      console.log('Archivo seleccionado:', this.selectedFile);
      // Aquí podrías enviar el archivo a tu backend
      this.modalCtrl.dismiss();
    }
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }
}