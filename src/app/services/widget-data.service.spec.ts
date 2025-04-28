import { TestBed } from '@angular/core/testing';

import { WidgetDataService } from './widget-data.service';

describe('WidgetDataService', () => {
  let service: WidgetDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WidgetDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
