import { Type } from '@angular/core';

export interface WidgetType {
  id: number;
  label: string;
  content: Type<unknown>;
}
