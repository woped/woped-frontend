import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { P2tComponent } from './p2t.component';

describe('P2tComponent', () => {
  let component: P2tComponent;
  let fixture: ComponentFixture<P2tComponent>;
  let promptSpy: jest.SpyInstance;
  let confirmSpy: jest.SpyInstance;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      declarations: [ P2tComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(P2tComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // Create spies for global functions
    promptSpy = jest.spyOn(window, 'prompt');
    confirmSpy = jest.spyOn(window, 'confirm');
  });

  it('should enter API key', () => {
    promptSpy.mockReturnValue('sk-proj-123456');
    component.enterApiKey(null);
    expect(component.apiKey).toEqual('sk-proj-123456');
    expect(component.useLLM).toBeTruthy();
    expect(component.toggleText).toEqual('LLM');
    expect(component.showPromptInput).toBeTruthy();
  });

  it('should prompt for API key', () => {
    confirmSpy.mockReturnValue(true);
    promptSpy.mockReturnValue('sk-proj-123456');
    component.promptForApiKey();
    expect(component.apiKey).toEqual('sk-proj-123456');
  });

  it('should get display API key', () => {
    component.apiKey = 'sk-proj-123456';
    expect(component.getDisplayApiKey()).toEqual('...123456');
  });

  it('should edit prompt', () => {
    confirmSpy.mockReturnValue(true);
    component.editPrompt();
    expect(component.isPromptReadonly).toBeFalsy();
  });
});