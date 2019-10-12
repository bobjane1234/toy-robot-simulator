import { TestBed, async, inject } from '@angular/core/testing';
import { MoveRobotService } from './move-robot.service';
import { COMMAND_DICT, Command } from '../shared/globals';
describe('Service: Command', () => {
  
  beforeEach(() => {
  TestBed.configureTestingModule({
      providers: [MoveRobotService]
    });
  });

  it('should ...', inject([MoveRobotService], (service: MoveRobotService) => {
    expect(service).toBeTruthy();
  }));

  it('parse method', inject([MoveRobotService], (moveRobotService: MoveRobotService)  => {
    it('should parse the MOVE', () => {

      let result: Command = moveRobotService.parse("MOVE");
      expect(result.cmd).toEqual(COMMAND_DICT.MOVE)
    });
    it('should parse the  LEFT', () => {
      let result: Command = moveRobotService.parse("LEFT");
      expect(result.cmd).toEqual(COMMAND_DICT.LEFT)
    });
    it('should parse the MOVE RIGHT', () => {
      let result: Command = moveRobotService.parse("RIGHT");
      expect(result.cmd).toEqual(COMMAND_DICT.RIGHT)
    });
    it('should parse the REPORT', () => {
      let result: Command = moveRobotService.parse("REPORT");
      expect(result.cmd).toEqual(COMMAND_DICT.REPORT)
    });
    it('should parse the PLACE ', () => {
      let result: Command = moveRobotService.parse("PLACE 0 0 NORTH");
      expect(result.cmd).toEqual(COMMAND_DICT.PLACE)

    });
  }));
});