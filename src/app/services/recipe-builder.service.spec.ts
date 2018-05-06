import { TestBed, inject } from '@angular/core/testing';

import { RecipeBuilderService } from './recipe-builder.service';

describe('RecipeBuilderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecipeBuilderService]
    });
  });

  it('should be created', inject([RecipeBuilderService], (service: RecipeBuilderService) => {
    expect(service).toBeTruthy();
  }));
});
