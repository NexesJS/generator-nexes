'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-nexes:app', () => {
    beforeEach(() => helpers.run(path.join(__dirname, '../generators/app'))
        .withPrompts({someAnswer: true}));

    it('creates files', () => {
        assert.file([
            'LICENSE'
        ]);
    });
});
