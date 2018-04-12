import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeerChatComponent } from './peer-chat.component';

describe('PeerChatComponent', () => {
  let component: PeerChatComponent;
  let fixture: ComponentFixture<PeerChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeerChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeerChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
