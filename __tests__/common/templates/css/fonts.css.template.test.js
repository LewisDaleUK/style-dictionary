import { expect } from 'chai';
import cssFontsTemplate from '../../../../lib/common/templates/css/fonts.css.template.js';

describe('common', () => {
  describe('templates', () => {
    describe('css', () => {
      describe('fonts.css.template', () => {
        it('should produce a valid css font-face declaration without weight or style defined', () => {
          const tokens = {
            asset: {
              font: {
                myFont: {
                  name: {
                    value: 'font',
                    type: 'fontFamily',
                  },
                  ttf: {
                    value: 'font.ttf',
                    type: 'asset',
                  },
                },
              },
            },
          };
          const output = cssFontsTemplate(tokens);
          expect(output).to.equal(`@font-face {
  font-family: "font";
  src: url('../font.ttf') format('truetype');
}`);
        });
        it('should produce a valid css font-face declaration with a weight defined', () => {
          const tokens = {
            asset: {
              font: {
                myFont: {
                  name: {
                    value: 'font',
                    type: 'fontFamily',
                  },
                  ttf: {
                    value: 'font.ttf',
                    type: 'asset',
                  },
                  weight: {
                    value: 400,
                  },
                },
              },
            },
          };
          const output = cssFontsTemplate(tokens);
          expect(output).to.equal(`@font-face {
  font-family: "font";
  src: url('../font.ttf') format('truetype');
  font-weight: 400;
}`);
        });
        it('should produce a valid css font-face declaration with a style defined', () => {
          const tokens = {
            asset: {
              font: {
                myFont: {
                  name: {
                    value: 'font',
                    type: 'fontFamily',
                  },
                  ttf: {
                    value: 'font.ttf',
                    type: 'asset',
                  },
                  style: {
                    value: 'normal',
                  },
                },
              },
            },
          };
          const output = cssFontsTemplate(tokens);
          expect(output).to.equal(`@font-face {
  font-family: "font";
  src: url('../font.ttf') format('truetype');
  font-style: normal;
}`);
        });
        it('should produce a valid css font-face declaration with both style and weight defined', () => {
          const tokens = {
            asset: {
              font: {
                myFont: {
                  name: {
                    value: 'font',
                    type: 'fontFamily',
                  },
                  ttf: {
                    value: 'font.ttf',
                    type: 'asset',
                  },
                  style: {
                    value: 'normal',
                  },
                  weight: {
                    value: 400,
                  },
                },
              },
            },
          };
          const output = cssFontsTemplate(tokens);
          expect(output).to.equal(`@font-face {
  font-family: "font";
  src: url('../font.ttf') format('truetype');
  font-style: normal;
  font-weight: 400;
}`);
        });
      });
    });
  });
});
