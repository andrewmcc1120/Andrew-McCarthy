import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { EmailService } from './email.service';

describe('EmailService', () => {
  let service: EmailService;
  let mockHttpClient;

  beforeEach(async () => {
    mockHttpClient = jasmine.createSpyObj(['post']);
    await TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: mockHttpClient }
      ]
    });
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
