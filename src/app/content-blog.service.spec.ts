import { TestBed, inject } from '@angular/core/testing';

import { ContentBlogService } from './content-blog.service';

describe('ContentBlogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContentBlogService]
    });
  });

  it('should be created', inject([ContentBlogService], (service: ContentBlogService) => {
    expect(service).toBeTruthy();
  }));
});
