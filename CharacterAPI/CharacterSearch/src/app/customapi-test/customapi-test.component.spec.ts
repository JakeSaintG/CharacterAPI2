import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { CustomapiTestComponent } from './customapi-test.component';
import { getBaseUrl } from 'src/main';

describe('CustomapiTestComponent', () => {
  let component: CustomapiTestComponent;
  let fixture: ComponentFixture<CustomapiTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomapiTestComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule ],
      providers: [{ provide: 'BASE_URL', useValue: "testUrl", deps: [] }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomapiTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
