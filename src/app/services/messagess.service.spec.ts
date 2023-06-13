import { TestBed } from '@angular/core/testing';

import { MessagessService } from './messagess.service';

describe('MessagessService', () => {
  let service: MessagessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessagessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
