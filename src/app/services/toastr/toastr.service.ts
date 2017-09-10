import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Injectable } from '@angular/core';

@Injectable()
export class ToastrService {

    constructor(private toastr: ToastsManager) { }
    showSuccess(message) {
        this.toastr.success(message);
    }
    showError(error) {
        this.toastr.error(error);
    }
}
