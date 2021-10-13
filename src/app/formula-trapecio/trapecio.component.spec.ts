import { TrapecioComponent } from './trapecio.component';

describe('TrapecioComponent', () => {
  let component : TrapecioComponent;

  beforeEach( () => {
    component = new TrapecioComponent();
  });

  it('should the area when calarea', () => {
    component.calarea();
    expect(component.area).toBe(0);
  });
  it('should -1 when input is negative', () => {
    component.calarea();
    expect(component.area).toBe(-1);
  });
});