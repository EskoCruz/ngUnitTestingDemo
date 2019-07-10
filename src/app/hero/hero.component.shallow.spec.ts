import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HeroComponent } from './hero.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeroComponent (shallow tests)', () => {
  let fixture: ComponentFixture<HeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HeroComponent]
    });

    fixture = TestBed.createComponent(HeroComponent);
    // fixture.componentInstance.delete;
  });


  it('should have the correct hero', () => {
    fixture.componentInstance.hero = { id: 1, name: 'Superman', strength: 3 };

    expect(fixture.componentInstance.hero.name).toEqual('Superman');
  });

});
