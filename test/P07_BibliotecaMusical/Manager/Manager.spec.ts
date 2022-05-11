import 'mocha';
import {expect} from 'chai';
import {Manager} from '../../../src/P07_BibliotecaMusical/Manager/Manager';

describe('Manager', () => {
  let manager: Manager;
  beforeEach(() => {
    manager = new Manager();
  });

  it('start() should start the user interface of Manager', () => {
    expect(manager.start).to.exist;
    expect(manager.start).to.be.a('function');
  });
});