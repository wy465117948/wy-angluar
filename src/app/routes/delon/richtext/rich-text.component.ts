import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';
import { UEditorComponent } from 'ngx-ueditor';

@Component({
  selector: 'app-rich-text',
  templateUrl: './rich-text.component.html'
})
export class RichTextComponent implements OnInit {
  form: FormGroup;
  submitting = false;

  @ViewChild('full', { static: false }) full: UEditorComponent;
  full_source: string;
  config: any = {

  };

  constructor(private fb: FormBuilder, private msg: NzMessageService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: [null, [Validators.required]],
      date: [null, [Validators.required]],
      goal: [null, [Validators.required]],
      standard: [null, [Validators.required]],
      client: [null, []],
      invites: [null, []],
      weight: [null, []],
      public: [1, [Validators.min(1), Validators.max(3)]],
      publicUsers: [null, []],
      richText: [null, []]
    });
  }

  submit() {
    this.submitting = true;
    setTimeout(() => {
      this.submitting = false;
      this.msg.success(`提交成功`);
    }, 1000);
  }
}
