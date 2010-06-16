
/**
 * Module dependencies.
 */

var utils = require('connect/utils'),
    assert = require('assert');

module.exports = {
    'test md5()': function(){
        assert.equal('5JMpgGF2EjbJawLqaqiirQ==', utils.md5('wahoo', 'base64'));
        assert.equal('e493298061761236c96b02ea6aa8a2ad', utils.md5('wahoo'));
    },
    
    'test toBoolean()': function(){
        assert.strictEqual(true, utils.toBoolean(true));
        assert.strictEqual(true, utils.toBoolean(1));
        assert.strictEqual(true, utils.toBoolean('1'));
        assert.strictEqual(true, utils.toBoolean('true'));
        assert.strictEqual(true, utils.toBoolean('yes'));
        assert.strictEqual(true, utils.toBoolean('y'));
        
        assert.strictEqual(false, utils.toBoolean(false));
        assert.strictEqual(false, utils.toBoolean(0));
        assert.strictEqual(false, utils.toBoolean('0'));
        assert.strictEqual(false, utils.toBoolean('-1'));
        assert.strictEqual(false, utils.toBoolean('false'));
        assert.strictEqual(false, utils.toBoolean('no'));
        assert.strictEqual(false, utils.toBoolean('n'));
        assert.strictEqual(false, utils.toBoolean('awrasdfasdfas'));
        assert.strictEqual(false, utils.toBoolean(''));
    },
    
    'test parseCookie()': function(){
        assert.eql({ foo: 'bar' }, utils.parseCookie('foo=bar'));
        assert.eql({ sid: '123' }, utils.parseCookie('SID=123'));
        assert.eql({ sid: '123' }, utils.parseCookie('SID=123;SID=somethingElse'));
        assert.eql({ foo: 'bar', baz: 'raz' }, utils.parseCookie('foo   =  bar; baz = raz'));
        assert.eql({ fbs: 'uid=0987654321&name=Test User' }, utils.parseCookie('fbs="uid=0987654321&name=Test+User"'));
    },
    
    'test serializeCookie()': function(){
        assert.equal('foo=bar; path=/', utils.serializeCookie('foo', 'bar', { path: '/' }));
        assert.equal('foo=bar; secure', utils.serializeCookie('foo', 'bar', { secure: true }));
        assert.equal('foo=bar', utils.serializeCookie('foo', 'bar', { secure: false }));
        assert.equal('foo=foo%20bar', utils.serializeCookie('foo', 'foo bar'));
    },
    
    'test miniMarkdown': function(){
        assert.equal('<em>foo</em>', utils.miniMarkdown('_foo_'));
        assert.equal('<em>foo</em>', utils.miniMarkdown('*foo*'));
        assert.equal('<strong>foo</strong>', utils.miniMarkdown('**foo**'));
        assert.equal('<strong>foo</strong>', utils.miniMarkdown('__foo__'));
        assert.equal('<em>foo</em>_', utils.miniMarkdown('_foo__'));
        assert.equal('<a href="/login">User Login</a>', utils.miniMarkdown('[User Login](/login)'));
    },
    
    'test escapeHtml()': function(){
        assert.equal('&lt;p&gt;', utils.htmlEscape('<p>'));
    }
};