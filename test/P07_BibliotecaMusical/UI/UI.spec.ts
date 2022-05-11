import 'mocha';
import {expect} from 'chai';
import {UI} from '../../../src/P07_BibliotecaMusical/UI/UI';

describe('UI', () => {
  let ui: UI;
  beforeEach(() => {
    ui = new UI();
  });

  it('showMenu() should show the menu', () => {
    expect(ui.showMenu).to.exist;
    expect(ui.showMenu).to.be.a('function');
  });
});