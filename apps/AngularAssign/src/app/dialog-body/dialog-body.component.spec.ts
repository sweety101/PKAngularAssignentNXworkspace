import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { DialogBodyComponent } from './dialog-body.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
export class MatDialogRefMock {
  close(value = 'Thanks for using me!'): void {
    value;
  }
}
describe('DialogBodyComponent', () => {
  let component: DialogBodyComponent;
  let fixture: ComponentFixture<DialogBodyComponent>;
  let dialog: MatDialogRef<DialogBodyComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogBodyComponent],
      imports: [MatDialogModule, HttpClientTestingModule],
      providers: [{ provide: MatDialogRef, useClass: MatDialogRefMock }],
    }).compileComponents();
    dialog = TestBed.inject(MatDialogRef);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('close method', () => {
    spyOn(dialog, 'close');
    component.close();
    expect(dialog.close).toHaveBeenCalled();
  });
});
