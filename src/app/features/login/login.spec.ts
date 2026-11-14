
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Login } from './login';
import { vi } from 'vitest';

describe('Login', () => {
  let component: Login;
  let fixture: ComponentFixture<Login>;

  const routerMock = { navigate: vi.fn() };

  beforeEach(async () => {
    routerMock.navigate.mockClear();

    await TestBed.configureTestingModule({
      imports: [Login],
      providers: [{ provide: Router, useValue: routerMock }]
    }).compileComponents();

    fixture = TestBed.createComponent(Login);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should login correctly', () => {
    component.username = 'admin';
    component.password = '1234';
    component.onLogin();

    expect(routerMock.navigate).toHaveBeenCalledWith(['/home']);
  });

  it('should reject incorrect credentials', () => {
    vi.spyOn(window, 'alert').mockImplementation(() => {});

    component.username = 'user';
    component.password = 'wrong';
    component.onLogin();

    expect(window.alert).toHaveBeenCalled();
  });

  it('should cancel and clear fields', () => {
    component.username = 'admin';
    component.password = '1234';
    component.onCancel();

    expect(component.username).toBe('');
    expect(component.password).toBe('');
    expect(routerMock.navigate).toHaveBeenCalledWith(['/home']);
  });
});
