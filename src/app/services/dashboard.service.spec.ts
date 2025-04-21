import { DashboardService } from './dashboard.service';

describe('dashboardService', () => {
  let dashboardService: DashboardService;

  beforeEach(() => {
    dashboardService = new DashboardService();
  });

  it('getItems should be equal to widgets', () => {
    expect(dashboardService.getItems()).toEqual(dashboardService.widgets());
  });

  it('getItems should be equal to widgets', () => {
    expect(dashboardService.getAddIds()).toEqual(
      dashboardService.addedWidgets()
    );
  });
});
