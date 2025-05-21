import { Component, ElementRef, ViewChild } from '@angular/core';
import { ModalController, IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { catchError } from 'rxjs';
import { LoadDataServiceService } from 'src/app/services/load-data.service.service';

@Component({
  selector: 'app-upload-modal',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './upload-modal.component.html',
  styleUrls: ['./upload-modal.component.scss'],
  providers: [LoadDataServiceService],
})
export class UploadModalComponent {
  selectedFile: File | null = null;

  constructor(private modalCtrl: ModalController, private dataService: LoadDataServiceService) {}

  @ViewChild('textResponseElement') textResponseElement!: ElementRef;

  uploadFile() {
    if (this.selectedFile) {
      const item = { file: this.selectedFile };
      this.dataService.upFile(item).subscribe({
        next: (res) => {
          this.closeModal();
          window.location.reload();
        },
        error: (err) => {
          const msg = err.error?.message || '❌ Error inesperado';
          this.textResponseElement.nativeElement.innerText = msg;
        }
      });
    }
  }

  onFileChange(event: any) {
    this.selectedFile = event.target.files[0];
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  
}