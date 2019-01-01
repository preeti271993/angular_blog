import { TestBed, inject } from '@angular/core/testing';

import { ContentListBlogService } from './content-list-blog.service';

describe('ContentListBlogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContentListBlogService]
    });
  });

  it('should be created', inject([ContentListBlogService], (service: ContentListBlogService) => {
    expect(service).toBeTruthy();
  }));
});
