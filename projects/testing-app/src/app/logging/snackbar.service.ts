import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable()
export class SnackbarService {
  get successConfig(): MatSnackBarConfig {
    return {
      duration: 2000,
      horizontalPosition: "end",
      verticalPosition: "bottom",
      panelClass: ["snackbar-success"]
    }
  };

  get warnConfig(): MatSnackBarConfig {
    return {
      duration: 7000,
      horizontalPosition: "end",
      verticalPosition: "bottom",
      panelClass: ["snackbar-warn"]
    }
  };

  get errorConfig(): MatSnackBarConfig {
    return {
      duration: 10000,
      horizontalPosition: "end",
      verticalPosition: "bottom",
      panelClass: ["snackbar-error"]
    }
  };

  constructor(private snackBar: MatSnackBar) { }

  openSuccess(message: string): void {
    this.snackBar.open(message, "Close", this.successConfig);
  }

  openWarn(message: string): void {
    this.snackBar.open(message, "Close", this.warnConfig);
  }

  openError(message: string): void {
    this.snackBar.open(message, "Close", this.errorConfig);
  }
}
