'use strict';

var _validAttr = require('../validAttr');

var _validAttr2 = _interopRequireDefault(_validAttr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('validAttr', function () {
  it('should allow all the reactProps', function () {
    expect((0, _validAttr2.default)('children')).toEqual(true);
    expect((0, _validAttr2.default)('dangerouslySetInnerHTML')).toEqual(true);
    expect((0, _validAttr2.default)('key')).toEqual(true);
    expect((0, _validAttr2.default)('ref')).toEqual(true);
    expect((0, _validAttr2.default)('autoFocus')).toEqual(true);
    expect((0, _validAttr2.default)('defaultValue')).toEqual(true);
    expect((0, _validAttr2.default)('valueLink')).toEqual(true);
    expect((0, _validAttr2.default)('defaultChecked')).toEqual(true);
    expect((0, _validAttr2.default)('checkedLink')).toEqual(true);
    expect((0, _validAttr2.default)('innerHTML')).toEqual(true);
    expect((0, _validAttr2.default)('suppressContentEditableWarning')).toEqual(true);
    expect((0, _validAttr2.default)('onFocusIn')).toEqual(true);
    expect((0, _validAttr2.default)('onFocusOut')).toEqual(true);
    expect((0, _validAttr2.default)('className')).toEqual(true);
  });
  it('should allow all the html props', function () {
    expect((0, _validAttr2.default)('accept')).toEqual(true);
    expect((0, _validAttr2.default)('acceptCharset')).toEqual(true);
    expect((0, _validAttr2.default)('accessKey')).toEqual(true);
    expect((0, _validAttr2.default)('action')).toEqual(true);
    expect((0, _validAttr2.default)('allowFullScreen')).toEqual(true);
    expect((0, _validAttr2.default)('allowTransparency')).toEqual(true);
    expect((0, _validAttr2.default)('alt')).toEqual(true);
    expect((0, _validAttr2.default)('async')).toEqual(true);
    expect((0, _validAttr2.default)('autoComplete')).toEqual(true);
    expect((0, _validAttr2.default)('autoPlay')).toEqual(true);
    expect((0, _validAttr2.default)('capture')).toEqual(true);
    expect((0, _validAttr2.default)('cellPadding')).toEqual(true);
    expect((0, _validAttr2.default)('cellSpacing')).toEqual(true);
    expect((0, _validAttr2.default)('charSet')).toEqual(true);
    expect((0, _validAttr2.default)('challenge')).toEqual(true);
    expect((0, _validAttr2.default)('checked')).toEqual(true);
    expect((0, _validAttr2.default)('cite')).toEqual(true);
    expect((0, _validAttr2.default)('classID')).toEqual(true);
    expect((0, _validAttr2.default)('className')).toEqual(true);
    expect((0, _validAttr2.default)('cols')).toEqual(true);
    expect((0, _validAttr2.default)('colSpan')).toEqual(true);
    expect((0, _validAttr2.default)('content')).toEqual(true);
    expect((0, _validAttr2.default)('contentEditable')).toEqual(true);
    expect((0, _validAttr2.default)('contextMenu')).toEqual(true);
    expect((0, _validAttr2.default)('controls')).toEqual(true);
    expect((0, _validAttr2.default)('coords')).toEqual(true);
    expect((0, _validAttr2.default)('crossOrigin')).toEqual(true);
    expect((0, _validAttr2.default)('data')).toEqual(true);
    expect((0, _validAttr2.default)('dateTime')).toEqual(true);
    expect((0, _validAttr2.default)('default')).toEqual(true);
    expect((0, _validAttr2.default)('defer')).toEqual(true);
    expect((0, _validAttr2.default)('dir')).toEqual(true);
    expect((0, _validAttr2.default)('disabled')).toEqual(true);
    expect((0, _validAttr2.default)('download')).toEqual(true);
    expect((0, _validAttr2.default)('draggable')).toEqual(true);
    expect((0, _validAttr2.default)('encType')).toEqual(true);
    expect((0, _validAttr2.default)('form')).toEqual(true);
    expect((0, _validAttr2.default)('formAction')).toEqual(true);
    expect((0, _validAttr2.default)('formEncType')).toEqual(true);
    expect((0, _validAttr2.default)('formMethod')).toEqual(true);
    expect((0, _validAttr2.default)('formNoValidate')).toEqual(true);
    expect((0, _validAttr2.default)('formTarget')).toEqual(true);
    expect((0, _validAttr2.default)('frameBorder')).toEqual(true);
    expect((0, _validAttr2.default)('headers')).toEqual(true);
    expect((0, _validAttr2.default)('height')).toEqual(true);
    expect((0, _validAttr2.default)('hidden')).toEqual(true);
    expect((0, _validAttr2.default)('high')).toEqual(true);
    expect((0, _validAttr2.default)('href')).toEqual(true);
    expect((0, _validAttr2.default)('hrefLang')).toEqual(true);
    expect((0, _validAttr2.default)('htmlFor')).toEqual(true);
    expect((0, _validAttr2.default)('httpEquiv')).toEqual(true);
    expect((0, _validAttr2.default)('icon')).toEqual(true);
    expect((0, _validAttr2.default)('id')).toEqual(true);
    expect((0, _validAttr2.default)('inputMode')).toEqual(true);
    expect((0, _validAttr2.default)('integrity')).toEqual(true);
    expect((0, _validAttr2.default)('is')).toEqual(true);
    expect((0, _validAttr2.default)('keyParams')).toEqual(true);
    expect((0, _validAttr2.default)('keyType')).toEqual(true);
    expect((0, _validAttr2.default)('kind')).toEqual(true);
    expect((0, _validAttr2.default)('label')).toEqual(true);
    expect((0, _validAttr2.default)('lang')).toEqual(true);
    expect((0, _validAttr2.default)('list')).toEqual(true);
    expect((0, _validAttr2.default)('loop')).toEqual(true);
    expect((0, _validAttr2.default)('low')).toEqual(true);
    expect((0, _validAttr2.default)('manifest')).toEqual(true);
    expect((0, _validAttr2.default)('marginHeight')).toEqual(true);
    expect((0, _validAttr2.default)('marginWidth')).toEqual(true);
    expect((0, _validAttr2.default)('max')).toEqual(true);
    expect((0, _validAttr2.default)('maxLength')).toEqual(true);
    expect((0, _validAttr2.default)('media')).toEqual(true);
    expect((0, _validAttr2.default)('mediaGroup')).toEqual(true);
    expect((0, _validAttr2.default)('method')).toEqual(true);
    expect((0, _validAttr2.default)('min')).toEqual(true);
    expect((0, _validAttr2.default)('minLength')).toEqual(true);
    expect((0, _validAttr2.default)('multiple')).toEqual(true);
    expect((0, _validAttr2.default)('muted')).toEqual(true);
    expect((0, _validAttr2.default)('name')).toEqual(true);
    expect((0, _validAttr2.default)('nonce')).toEqual(true);
    expect((0, _validAttr2.default)('noValidate')).toEqual(true);
    expect((0, _validAttr2.default)('open')).toEqual(true);
    expect((0, _validAttr2.default)('optimum')).toEqual(true);
    expect((0, _validAttr2.default)('pattern')).toEqual(true);
    expect((0, _validAttr2.default)('placeholder')).toEqual(true);
    expect((0, _validAttr2.default)('poster')).toEqual(true);
    expect((0, _validAttr2.default)('preload')).toEqual(true);
    expect((0, _validAttr2.default)('profile')).toEqual(true);
    expect((0, _validAttr2.default)('radioGroup')).toEqual(true);
    expect((0, _validAttr2.default)('readOnly')).toEqual(true);
    expect((0, _validAttr2.default)('referrerPolicy')).toEqual(true);
    expect((0, _validAttr2.default)('rel')).toEqual(true);
    expect((0, _validAttr2.default)('required')).toEqual(true);
    expect((0, _validAttr2.default)('reversed')).toEqual(true);
    expect((0, _validAttr2.default)('role')).toEqual(true);
    expect((0, _validAttr2.default)('rows')).toEqual(true);
    expect((0, _validAttr2.default)('rowSpan')).toEqual(true);
    expect((0, _validAttr2.default)('sandbox')).toEqual(true);
    expect((0, _validAttr2.default)('scope')).toEqual(true);
    expect((0, _validAttr2.default)('scoped')).toEqual(true);
    expect((0, _validAttr2.default)('scrolling')).toEqual(true);
    expect((0, _validAttr2.default)('seamless')).toEqual(true);
    expect((0, _validAttr2.default)('selected')).toEqual(true);
    expect((0, _validAttr2.default)('shape')).toEqual(true);
    expect((0, _validAttr2.default)('size')).toEqual(true);
    expect((0, _validAttr2.default)('sizes')).toEqual(true);
    expect((0, _validAttr2.default)('span')).toEqual(true);
    expect((0, _validAttr2.default)('spellCheck')).toEqual(true);
    expect((0, _validAttr2.default)('src')).toEqual(true);
    expect((0, _validAttr2.default)('srcDoc')).toEqual(true);
    expect((0, _validAttr2.default)('srcLang')).toEqual(true);
    expect((0, _validAttr2.default)('srcSet')).toEqual(true);
    expect((0, _validAttr2.default)('start')).toEqual(true);
    expect((0, _validAttr2.default)('step')).toEqual(true);
    expect((0, _validAttr2.default)('style')).toEqual(true);
    expect((0, _validAttr2.default)('summary')).toEqual(true);
    expect((0, _validAttr2.default)('tabIndex')).toEqual(true);
    expect((0, _validAttr2.default)('target')).toEqual(true);
    expect((0, _validAttr2.default)('title')).toEqual(true);
    expect((0, _validAttr2.default)('type')).toEqual(true);
    expect((0, _validAttr2.default)('useMap')).toEqual(true);
    expect((0, _validAttr2.default)('value')).toEqual(true);
    expect((0, _validAttr2.default)('width')).toEqual(true);
    expect((0, _validAttr2.default)('wmode')).toEqual(true);
    expect((0, _validAttr2.default)('wrap')).toEqual(true);
    expect((0, _validAttr2.default)('about')).toEqual(true);
    expect((0, _validAttr2.default)('datatype')).toEqual(true);
    expect((0, _validAttr2.default)('inlist')).toEqual(true);
    expect((0, _validAttr2.default)('prefix')).toEqual(true);
    expect((0, _validAttr2.default)('property')).toEqual(true);
    expect((0, _validAttr2.default)('resource')).toEqual(true);
    expect((0, _validAttr2.default)('typeof')).toEqual(true);
    expect((0, _validAttr2.default)('vocab')).toEqual(true);
    expect((0, _validAttr2.default)('autoCapitalize')).toEqual(true);
    expect((0, _validAttr2.default)('autoCorrect')).toEqual(true);
    expect((0, _validAttr2.default)('autoSave')).toEqual(true);
    expect((0, _validAttr2.default)('color')).toEqual(true);
    expect((0, _validAttr2.default)('itemProp')).toEqual(true);
    expect((0, _validAttr2.default)('itemScope')).toEqual(true);
    expect((0, _validAttr2.default)('itemType')).toEqual(true);
    expect((0, _validAttr2.default)('itemID')).toEqual(true);
    expect((0, _validAttr2.default)('itemRef')).toEqual(true);
    expect((0, _validAttr2.default)('results')).toEqual(true);
    expect((0, _validAttr2.default)('security')).toEqual(true);
    expect((0, _validAttr2.default)('unselectable')).toEqual(true);
  });
  it('should handle all the SVG props', function () {
    expect((0, _validAttr2.default)('accentHeight')).toEqual(true);
    expect((0, _validAttr2.default)('accumulate')).toEqual(true);
    expect((0, _validAttr2.default)('additive')).toEqual(true);
    expect((0, _validAttr2.default)('alignmentBaseline')).toEqual(true);
    expect((0, _validAttr2.default)('allowReorder')).toEqual(true);
    expect((0, _validAttr2.default)('alphabetic')).toEqual(true);
    expect((0, _validAttr2.default)('amplitude')).toEqual(true);
    expect((0, _validAttr2.default)('arabicForm')).toEqual(true);
    expect((0, _validAttr2.default)('ascent')).toEqual(true);
    expect((0, _validAttr2.default)('attributeName')).toEqual(true);
    expect((0, _validAttr2.default)('attributeType')).toEqual(true);
    expect((0, _validAttr2.default)('autoReverse')).toEqual(true);
    expect((0, _validAttr2.default)('azimuth')).toEqual(true);
    expect((0, _validAttr2.default)('baseFrequency')).toEqual(true);
    expect((0, _validAttr2.default)('baseProfile')).toEqual(true);
    expect((0, _validAttr2.default)('baselineShift')).toEqual(true);
    expect((0, _validAttr2.default)('bbox')).toEqual(true);
    expect((0, _validAttr2.default)('begin')).toEqual(true);
    expect((0, _validAttr2.default)('bias')).toEqual(true);
    expect((0, _validAttr2.default)('by')).toEqual(true);
    expect((0, _validAttr2.default)('calcMode')).toEqual(true);
    expect((0, _validAttr2.default)('capHeight')).toEqual(true);
    expect((0, _validAttr2.default)('clip')).toEqual(true);
    expect((0, _validAttr2.default)('clipPath')).toEqual(true);
    expect((0, _validAttr2.default)('clipRule')).toEqual(true);
    expect((0, _validAttr2.default)('clipPathUnits')).toEqual(true);
    expect((0, _validAttr2.default)('colorInterpolation')).toEqual(true);
    expect((0, _validAttr2.default)('colorInterpolationFilters')).toEqual(true);
    expect((0, _validAttr2.default)('colorProfile')).toEqual(true);
    expect((0, _validAttr2.default)('colorRendering')).toEqual(true);
    expect((0, _validAttr2.default)('contentScriptType')).toEqual(true);
    expect((0, _validAttr2.default)('contentStyleType')).toEqual(true);
    expect((0, _validAttr2.default)('cursor')).toEqual(true);
    expect((0, _validAttr2.default)('cx')).toEqual(true);
    expect((0, _validAttr2.default)('cy')).toEqual(true);
    expect((0, _validAttr2.default)('d')).toEqual(true);
    expect((0, _validAttr2.default)('decelerate')).toEqual(true);
    expect((0, _validAttr2.default)('descent')).toEqual(true);
    expect((0, _validAttr2.default)('diffuseConstant')).toEqual(true);
    expect((0, _validAttr2.default)('direction')).toEqual(true);
    expect((0, _validAttr2.default)('display')).toEqual(true);
    expect((0, _validAttr2.default)('divisor')).toEqual(true);
    expect((0, _validAttr2.default)('dominantBaseline')).toEqual(true);
    expect((0, _validAttr2.default)('dur')).toEqual(true);
    expect((0, _validAttr2.default)('dx')).toEqual(true);
    expect((0, _validAttr2.default)('dy')).toEqual(true);
    expect((0, _validAttr2.default)('edgeMode')).toEqual(true);
    expect((0, _validAttr2.default)('elevation')).toEqual(true);
    expect((0, _validAttr2.default)('enableBackground')).toEqual(true);
    expect((0, _validAttr2.default)('end')).toEqual(true);
    expect((0, _validAttr2.default)('exponent')).toEqual(true);
    expect((0, _validAttr2.default)('externalResourcesRequired')).toEqual(true);
    expect((0, _validAttr2.default)('fill')).toEqual(true);
    expect((0, _validAttr2.default)('fillOpacity')).toEqual(true);
    expect((0, _validAttr2.default)('fillRule')).toEqual(true);
    expect((0, _validAttr2.default)('filter')).toEqual(true);
    expect((0, _validAttr2.default)('filterRes')).toEqual(true);
    expect((0, _validAttr2.default)('filterUnits')).toEqual(true);
    expect((0, _validAttr2.default)('floodColor')).toEqual(true);
    expect((0, _validAttr2.default)('floodOpacity')).toEqual(true);
    expect((0, _validAttr2.default)('focusable')).toEqual(true);
    expect((0, _validAttr2.default)('fontFamily')).toEqual(true);
    expect((0, _validAttr2.default)('fontSize')).toEqual(true);
    expect((0, _validAttr2.default)('fontSizeAdjust')).toEqual(true);
    expect((0, _validAttr2.default)('fontStretch')).toEqual(true);
    expect((0, _validAttr2.default)('fontStyle')).toEqual(true);
    expect((0, _validAttr2.default)('fontVariant')).toEqual(true);
    expect((0, _validAttr2.default)('fontWeight')).toEqual(true);
    expect((0, _validAttr2.default)('format')).toEqual(true);
    expect((0, _validAttr2.default)('from')).toEqual(true);
    expect((0, _validAttr2.default)('fx')).toEqual(true);
    expect((0, _validAttr2.default)('fy')).toEqual(true);
    expect((0, _validAttr2.default)('g1')).toEqual(true);
    expect((0, _validAttr2.default)('g2')).toEqual(true);
    expect((0, _validAttr2.default)('glyphName')).toEqual(true);
    expect((0, _validAttr2.default)('glyphOrientationHorizontal')).toEqual(true);
    expect((0, _validAttr2.default)('glyphOrientationVertical')).toEqual(true);
    expect((0, _validAttr2.default)('glyphRef')).toEqual(true);
    expect((0, _validAttr2.default)('gradientTransform')).toEqual(true);
    expect((0, _validAttr2.default)('gradientUnits')).toEqual(true);
    expect((0, _validAttr2.default)('hanging')).toEqual(true);
    expect((0, _validAttr2.default)('horizAdvX')).toEqual(true);
    expect((0, _validAttr2.default)('horizOriginX')).toEqual(true);
    expect((0, _validAttr2.default)('ideographic')).toEqual(true);
    expect((0, _validAttr2.default)('imageRendering')).toEqual(true);
    expect((0, _validAttr2.default)('in')).toEqual(true);
    expect((0, _validAttr2.default)('in2')).toEqual(true);
    expect((0, _validAttr2.default)('intercept')).toEqual(true);
    expect((0, _validAttr2.default)('k')).toEqual(true);
    expect((0, _validAttr2.default)('k1')).toEqual(true);
    expect((0, _validAttr2.default)('k2')).toEqual(true);
    expect((0, _validAttr2.default)('k3')).toEqual(true);
    expect((0, _validAttr2.default)('k4')).toEqual(true);
    expect((0, _validAttr2.default)('kernelMatrix')).toEqual(true);
    expect((0, _validAttr2.default)('kernelUnitLength')).toEqual(true);
    expect((0, _validAttr2.default)('kerning')).toEqual(true);
    expect((0, _validAttr2.default)('keyPoints')).toEqual(true);
    expect((0, _validAttr2.default)('keySplines')).toEqual(true);
    expect((0, _validAttr2.default)('keyTimes')).toEqual(true);
    expect((0, _validAttr2.default)('lengthAdjust')).toEqual(true);
    expect((0, _validAttr2.default)('letterSpacing')).toEqual(true);
    expect((0, _validAttr2.default)('lightingColor')).toEqual(true);
    expect((0, _validAttr2.default)('limitingConeAngle')).toEqual(true);
    expect((0, _validAttr2.default)('local')).toEqual(true);
    expect((0, _validAttr2.default)('markerEnd')).toEqual(true);
    expect((0, _validAttr2.default)('markerMid')).toEqual(true);
    expect((0, _validAttr2.default)('markerStart')).toEqual(true);
    expect((0, _validAttr2.default)('markerHeight')).toEqual(true);
    expect((0, _validAttr2.default)('markerUnits')).toEqual(true);
    expect((0, _validAttr2.default)('markerWidth')).toEqual(true);
    expect((0, _validAttr2.default)('mask')).toEqual(true);
    expect((0, _validAttr2.default)('maskContentUnits')).toEqual(true);
    expect((0, _validAttr2.default)('maskUnits')).toEqual(true);
    expect((0, _validAttr2.default)('mathematical')).toEqual(true);
    expect((0, _validAttr2.default)('mode')).toEqual(true);
    expect((0, _validAttr2.default)('numOctaves')).toEqual(true);
    expect((0, _validAttr2.default)('offset')).toEqual(true);
    expect((0, _validAttr2.default)('opacity')).toEqual(true);
    expect((0, _validAttr2.default)('operator')).toEqual(true);
    expect((0, _validAttr2.default)('order')).toEqual(true);
    expect((0, _validAttr2.default)('orient')).toEqual(true);
    expect((0, _validAttr2.default)('orientation')).toEqual(true);
    expect((0, _validAttr2.default)('origin')).toEqual(true);
    expect((0, _validAttr2.default)('overflow')).toEqual(true);
    expect((0, _validAttr2.default)('overlinePosition')).toEqual(true);
    expect((0, _validAttr2.default)('overlineThickness')).toEqual(true);
    expect((0, _validAttr2.default)('paintOrder')).toEqual(true);
    expect((0, _validAttr2.default)('panose1')).toEqual(true);
    expect((0, _validAttr2.default)('pathLength')).toEqual(true);
    expect((0, _validAttr2.default)('patternContentUnits')).toEqual(true);
    expect((0, _validAttr2.default)('patternTransform')).toEqual(true);
    expect((0, _validAttr2.default)('patternUnits')).toEqual(true);
    expect((0, _validAttr2.default)('pointerEvents')).toEqual(true);
    expect((0, _validAttr2.default)('points')).toEqual(true);
    expect((0, _validAttr2.default)('pointsAtX')).toEqual(true);
    expect((0, _validAttr2.default)('pointsAtY')).toEqual(true);
    expect((0, _validAttr2.default)('pointsAtZ')).toEqual(true);
    expect((0, _validAttr2.default)('preserveAlpha')).toEqual(true);
    expect((0, _validAttr2.default)('preserveAspectRatio')).toEqual(true);
    expect((0, _validAttr2.default)('primitiveUnits')).toEqual(true);
    expect((0, _validAttr2.default)('r')).toEqual(true);
    expect((0, _validAttr2.default)('radius')).toEqual(true);
    expect((0, _validAttr2.default)('refX')).toEqual(true);
    expect((0, _validAttr2.default)('refY')).toEqual(true);
    expect((0, _validAttr2.default)('renderingIntent')).toEqual(true);
    expect((0, _validAttr2.default)('repeatCount')).toEqual(true);
    expect((0, _validAttr2.default)('repeatDur')).toEqual(true);
    expect((0, _validAttr2.default)('requiredExtensions')).toEqual(true);
    expect((0, _validAttr2.default)('requiredFeatures')).toEqual(true);
    expect((0, _validAttr2.default)('restart')).toEqual(true);
    expect((0, _validAttr2.default)('result')).toEqual(true);
    expect((0, _validAttr2.default)('rotate')).toEqual(true);
    expect((0, _validAttr2.default)('rx')).toEqual(true);
    expect((0, _validAttr2.default)('ry')).toEqual(true);
    expect((0, _validAttr2.default)('scale')).toEqual(true);
    expect((0, _validAttr2.default)('seed')).toEqual(true);
    expect((0, _validAttr2.default)('shapeRendering')).toEqual(true);
    expect((0, _validAttr2.default)('slope')).toEqual(true);
    expect((0, _validAttr2.default)('spacing')).toEqual(true);
    expect((0, _validAttr2.default)('specularConstant')).toEqual(true);
    expect((0, _validAttr2.default)('specularExponent')).toEqual(true);
    expect((0, _validAttr2.default)('speed')).toEqual(true);
    expect((0, _validAttr2.default)('spreadMethod')).toEqual(true);
    expect((0, _validAttr2.default)('startOffset')).toEqual(true);
    expect((0, _validAttr2.default)('stdDeviation')).toEqual(true);
    expect((0, _validAttr2.default)('stemh')).toEqual(true);
    expect((0, _validAttr2.default)('stemv')).toEqual(true);
    expect((0, _validAttr2.default)('stitchTiles')).toEqual(true);
    expect((0, _validAttr2.default)('stopColor')).toEqual(true);
    expect((0, _validAttr2.default)('stopOpacity')).toEqual(true);
    expect((0, _validAttr2.default)('strikethroughPosition')).toEqual(true);
    expect((0, _validAttr2.default)('strikethroughThickness')).toEqual(true);
    expect((0, _validAttr2.default)('string')).toEqual(true);
    expect((0, _validAttr2.default)('stroke')).toEqual(true);
    expect((0, _validAttr2.default)('strokeDasharray')).toEqual(true);
    expect((0, _validAttr2.default)('strokeDashoffset')).toEqual(true);
    expect((0, _validAttr2.default)('strokeLinecap')).toEqual(true);
    expect((0, _validAttr2.default)('strokeLinejoin')).toEqual(true);
    expect((0, _validAttr2.default)('strokeMiterlimit')).toEqual(true);
    expect((0, _validAttr2.default)('strokeOpacity')).toEqual(true);
    expect((0, _validAttr2.default)('strokeWidth')).toEqual(true);
    expect((0, _validAttr2.default)('surfaceScale')).toEqual(true);
    expect((0, _validAttr2.default)('systemLanguage')).toEqual(true);
    expect((0, _validAttr2.default)('tableValues')).toEqual(true);
    expect((0, _validAttr2.default)('targetX')).toEqual(true);
    expect((0, _validAttr2.default)('targetY')).toEqual(true);
    expect((0, _validAttr2.default)('textAnchor')).toEqual(true);
    expect((0, _validAttr2.default)('textDecoration')).toEqual(true);
    expect((0, _validAttr2.default)('textRendering')).toEqual(true);
    expect((0, _validAttr2.default)('textLength')).toEqual(true);
    expect((0, _validAttr2.default)('to')).toEqual(true);
    expect((0, _validAttr2.default)('transform')).toEqual(true);
    expect((0, _validAttr2.default)('u1')).toEqual(true);
    expect((0, _validAttr2.default)('u2')).toEqual(true);
    expect((0, _validAttr2.default)('underlinePosition')).toEqual(true);
    expect((0, _validAttr2.default)('underlineThickness')).toEqual(true);
    expect((0, _validAttr2.default)('unicode')).toEqual(true);
    expect((0, _validAttr2.default)('unicodeBidi')).toEqual(true);
    expect((0, _validAttr2.default)('unicodeRange')).toEqual(true);
    expect((0, _validAttr2.default)('unitsPerEm')).toEqual(true);
    expect((0, _validAttr2.default)('vAlphabetic')).toEqual(true);
    expect((0, _validAttr2.default)('vHanging')).toEqual(true);
    expect((0, _validAttr2.default)('vIdeographic')).toEqual(true);
    expect((0, _validAttr2.default)('vMathematical')).toEqual(true);
    expect((0, _validAttr2.default)('values')).toEqual(true);
    expect((0, _validAttr2.default)('vectorEffect')).toEqual(true);
    expect((0, _validAttr2.default)('version')).toEqual(true);
    expect((0, _validAttr2.default)('vertAdvY')).toEqual(true);
    expect((0, _validAttr2.default)('vertOriginX')).toEqual(true);
    expect((0, _validAttr2.default)('vertOriginY')).toEqual(true);
    expect((0, _validAttr2.default)('viewBox')).toEqual(true);
    expect((0, _validAttr2.default)('viewTarget')).toEqual(true);
    expect((0, _validAttr2.default)('visibility')).toEqual(true);
    expect((0, _validAttr2.default)('widths')).toEqual(true);
    expect((0, _validAttr2.default)('wordSpacing')).toEqual(true);
    expect((0, _validAttr2.default)('writingMode')).toEqual(true);
    expect((0, _validAttr2.default)('x')).toEqual(true);
    expect((0, _validAttr2.default)('xHeight')).toEqual(true);
    expect((0, _validAttr2.default)('x1')).toEqual(true);
    expect((0, _validAttr2.default)('x2')).toEqual(true);
    expect((0, _validAttr2.default)('xChannelSelector')).toEqual(true);
    expect((0, _validAttr2.default)('xlinkActuate')).toEqual(true);
    expect((0, _validAttr2.default)('xlinkArcrole')).toEqual(true);
    expect((0, _validAttr2.default)('xlinkHref')).toEqual(true);
    expect((0, _validAttr2.default)('xlinkRole')).toEqual(true);
    expect((0, _validAttr2.default)('xlinkShow')).toEqual(true);
    expect((0, _validAttr2.default)('xlinkTitle')).toEqual(true);
    expect((0, _validAttr2.default)('xlinkType')).toEqual(true);
    expect((0, _validAttr2.default)('xmlBase')).toEqual(true);
    expect((0, _validAttr2.default)('xmlns')).toEqual(true);
    expect((0, _validAttr2.default)('xmlnsXlink')).toEqual(true);
    expect((0, _validAttr2.default)('xmlLang')).toEqual(true);
    expect((0, _validAttr2.default)('xmlSpace')).toEqual(true);
    expect((0, _validAttr2.default)('y')).toEqual(true);
    expect((0, _validAttr2.default)('y1')).toEqual(true);
    expect((0, _validAttr2.default)('y2')).toEqual(true);
    expect((0, _validAttr2.default)('yChannelSelector')).toEqual(true);
    expect((0, _validAttr2.default)('z')).toEqual(true);
    expect((0, _validAttr2.default)('zoomAndPan')).toEqual(true);
  });
  it('should handle aria and data attributes', function () {
    expect((0, _validAttr2.default)('data-xyz')).toEqual(true);
    expect((0, _validAttr2.default)('data-omg-this-works')).toEqual(true);
    expect((0, _validAttr2.default)('aria-label')).toEqual(true);
    expect((0, _validAttr2.default)('aria-labelled-by')).toEqual(true);
  });
  it('should handle uppercase aria and data attributes', function () {
    expect((0, _validAttr2.default)('DATA-XYZ')).toEqual(true);
    expect((0, _validAttr2.default)('DATA-OMG-THIS-WORKS')).toEqual(true);
    expect((0, _validAttr2.default)('ARIA-LABEL')).toEqual(true);
    expect((0, _validAttr2.default)('ARIA-LABELLED-BY')).toEqual(true);
  });
  it('should allow all the event handlers', function () {
    expect((0, _validAttr2.default)('onCopy')).toEqual(true);
    expect((0, _validAttr2.default)('onCopyCapture')).toEqual(true);
    expect((0, _validAttr2.default)('onCut')).toEqual(true);
    expect((0, _validAttr2.default)('onCutCapture')).toEqual(true);
    expect((0, _validAttr2.default)('onPaste')).toEqual(true);
    expect((0, _validAttr2.default)('onPasteCapture')).toEqual(true);
    expect((0, _validAttr2.default)('onCompositionEnd')).toEqual(true);
    expect((0, _validAttr2.default)('onCompositionEndCapture')).toEqual(true);
    expect((0, _validAttr2.default)('onCompositionStart')).toEqual(true);
    expect((0, _validAttr2.default)('onCompositionStartCapture')).toEqual(true);
    expect((0, _validAttr2.default)('onCompositionUpdate')).toEqual(true);
    expect((0, _validAttr2.default)('onCompositionUpdateCapture')).toEqual(true);
    expect((0, _validAttr2.default)('onKeyDown')).toEqual(true);
    expect((0, _validAttr2.default)('onKeyDownCapture')).toEqual(true);
    expect((0, _validAttr2.default)('onKeyPress')).toEqual(true);
    expect((0, _validAttr2.default)('onKeyPressCapture')).toEqual(true);
    expect((0, _validAttr2.default)('onKeyUp')).toEqual(true);
    expect((0, _validAttr2.default)('onKeyUpCapture')).toEqual(true);
    expect((0, _validAttr2.default)('onFocus')).toEqual(true);
    expect((0, _validAttr2.default)('onFocusCapture')).toEqual(true);
    expect((0, _validAttr2.default)('onBlur')).toEqual(true);
    expect((0, _validAttr2.default)('onBlurCapture')).toEqual(true);
    expect((0, _validAttr2.default)('onChange')).toEqual(true);
    expect((0, _validAttr2.default)('onChangeCapture')).toEqual(true);
    expect((0, _validAttr2.default)('onInput')).toEqual(true);
    expect((0, _validAttr2.default)('onInputCapture')).toEqual(true);
    expect((0, _validAttr2.default)('onSubmit')).toEqual(true);
    expect((0, _validAttr2.default)('onSubmitCapture')).toEqual(true);
    expect((0, _validAttr2.default)('onClick')).toEqual(true);
    expect((0, _validAttr2.default)('onClickCapture')).toEqual(true);
    expect((0, _validAttr2.default)('onContextMenu')).toEqual(true);
    expect((0, _validAttr2.default)('onContextMenuCapture')).toEqual(true);
    expect((0, _validAttr2.default)('onDoubleClick')).toEqual(true);
    expect((0, _validAttr2.default)('onDoubleClickCapture')).toEqual(true);
    expect((0, _validAttr2.default)('onDrag')).toEqual(true);
    expect((0, _validAttr2.default)('onDragCapture')).toEqual(true);
    expect((0, _validAttr2.default)('onDragEnd')).toEqual(true);
    expect((0, _validAttr2.default)('onDragEndCapture')).toEqual(true);
    expect((0, _validAttr2.default)('onDragEnter')).toEqual(true);
    expect((0, _validAttr2.default)('onDragEnterCapture')).toEqual(true);
    expect((0, _validAttr2.default)('onDragExit')).toEqual(true);
    expect((0, _validAttr2.default)('onDragExitCapture')).toEqual(true);
    expect((0, _validAttr2.default)('onDragLeave')).toEqual(true);
    expect((0, _validAttr2.default)('onDragLeaveCapture')).toEqual(true);
    expect((0, _validAttr2.default)('onDragOver')).toEqual(true);
    expect((0, _validAttr2.default)('onDragOverCapture')).toEqual(true);
    expect((0, _validAttr2.default)('onDragStart')).toEqual(true);
    expect((0, _validAttr2.default)('onDragStartCapture')).toEqual(true);
    expect((0, _validAttr2.default)('onDrop')).toEqual(true);
    expect((0, _validAttr2.default)('onDropCapture')).toEqual(true);
    expect((0, _validAttr2.default)('onMouseDown')).toEqual(true);
    expect((0, _validAttr2.default)('onMouseDownCapture')).toEqual(true);
    expect((0, _validAttr2.default)('onMouseEnter')).toEqual(true);
    expect((0, _validAttr2.default)('onMouseEnterCapture')).toEqual(true);
    expect((0, _validAttr2.default)('onMouseLeave')).toEqual(true);
    expect((0, _validAttr2.default)('onMouseLeaveCapture')).toEqual(true);
    expect((0, _validAttr2.default)('onMouseMove')).toEqual(true);
    expect((0, _validAttr2.default)('onMouseMoveCapture')).toEqual(true);
    expect((0, _validAttr2.default)('onMouseOut')).toEqual(true);
    expect((0, _validAttr2.default)('onMouseOutCapture')).toEqual(true);
    expect((0, _validAttr2.default)('onMouseOver')).toEqual(true);
    expect((0, _validAttr2.default)('onMouseOverCapture')).toEqual(true);
    expect((0, _validAttr2.default)('onMouseUp')).toEqual(true);
    expect((0, _validAttr2.default)('onMouseUpCapture')).toEqual(true);
    expect((0, _validAttr2.default)('onSelect')).toEqual(true);
    expect((0, _validAttr2.default)('onSelectCapture')).toEqual(true);
    expect((0, _validAttr2.default)('onTouchCancel')).toEqual(true);
    expect((0, _validAttr2.default)('onTouchCancelCapture')).toEqual(true);
    expect((0, _validAttr2.default)('onTouchEnd')).toEqual(true);
    expect((0, _validAttr2.default)('onTouchEndCapture')).toEqual(true);
    expect((0, _validAttr2.default)('onTouchMove')).toEqual(true);
    expect((0, _validAttr2.default)('onTouchMoveCapture')).toEqual(true);
    expect((0, _validAttr2.default)('onTouchStart')).toEqual(true);
    expect((0, _validAttr2.default)('onTouchStartCapture')).toEqual(true);
    expect((0, _validAttr2.default)('onScroll')).toEqual(true);
    expect((0, _validAttr2.default)('onScrollCapture')).toEqual(true);
    expect((0, _validAttr2.default)('onWheel')).toEqual(true);
    expect((0, _validAttr2.default)('onWheelCapture')).toEqual(true);
    expect((0, _validAttr2.default)('onAbort')).toEqual(true);
    expect((0, _validAttr2.default)('onAbortCapture')).toEqual(true);
    expect((0, _validAttr2.default)('onCanPlay')).toEqual(true);
    expect((0, _validAttr2.default)('onCanPlayCapture')).toEqual(true);
    expect((0, _validAttr2.default)('onCanPlayThrough')).toEqual(true);
    expect((0, _validAttr2.default)('onCanPlayThroughCapture')).toEqual(true);
    expect((0, _validAttr2.default)('onDurationChange')).toEqual(true);
    expect((0, _validAttr2.default)('onDurationChangeCapture')).toEqual(true);
    expect((0, _validAttr2.default)('onEmptied')).toEqual(true);
    expect((0, _validAttr2.default)('onEmptiedCapture')).toEqual(true);
    expect((0, _validAttr2.default)('onEncrypted')).toEqual(true);
    expect((0, _validAttr2.default)('onEncryptedCapture')).toEqual(true);
    expect((0, _validAttr2.default)('onEnded')).toEqual(true);
    expect((0, _validAttr2.default)('onEndedCapture')).toEqual(true);
    expect((0, _validAttr2.default)('onError')).toEqual(true);
    expect((0, _validAttr2.default)('onErrorCapture')).toEqual(true);
    expect((0, _validAttr2.default)('onLoadedData')).toEqual(true);
    expect((0, _validAttr2.default)('onLoadedDataCapture')).toEqual(true);
    expect((0, _validAttr2.default)('onLoadedMetadata')).toEqual(true);
    expect((0, _validAttr2.default)('onLoadedMetadataCapture')).toEqual(true);
    expect((0, _validAttr2.default)('onLoadStart')).toEqual(true);
    expect((0, _validAttr2.default)('onLoadStartCapture')).toEqual(true);
    expect((0, _validAttr2.default)('onPause')).toEqual(true);
    expect((0, _validAttr2.default)('onPauseCapture')).toEqual(true);
    expect((0, _validAttr2.default)('onPlay')).toEqual(true);
    expect((0, _validAttr2.default)('onPlayCapture')).toEqual(true);
    expect((0, _validAttr2.default)('onPlaying')).toEqual(true);
    expect((0, _validAttr2.default)('onPlayingCapture')).toEqual(true);
    expect((0, _validAttr2.default)('onProgress')).toEqual(true);
    expect((0, _validAttr2.default)('onProgressCapture')).toEqual(true);
    expect((0, _validAttr2.default)('onRateChange')).toEqual(true);
    expect((0, _validAttr2.default)('onRateChangeCapture')).toEqual(true);
    expect((0, _validAttr2.default)('onSeeked')).toEqual(true);
    expect((0, _validAttr2.default)('onSeekedCapture')).toEqual(true);
    expect((0, _validAttr2.default)('onSeeking')).toEqual(true);
    expect((0, _validAttr2.default)('onSeekingCapture')).toEqual(true);
    expect((0, _validAttr2.default)('onStalled')).toEqual(true);
    expect((0, _validAttr2.default)('onStalledCapture')).toEqual(true);
    expect((0, _validAttr2.default)('onSuspend')).toEqual(true);
    expect((0, _validAttr2.default)('onSuspendCapture')).toEqual(true);
    expect((0, _validAttr2.default)('onTimeUpdate')).toEqual(true);
    expect((0, _validAttr2.default)('onTimeUpdateCapture')).toEqual(true);
    expect((0, _validAttr2.default)('onVolumeChange')).toEqual(true);
    expect((0, _validAttr2.default)('onVolumeChangeCapture')).toEqual(true);
    expect((0, _validAttr2.default)('onWaiting')).toEqual(true);
    expect((0, _validAttr2.default)('onWaitingCapture')).toEqual(true);
    expect((0, _validAttr2.default)('onLoad')).toEqual(true);
    expect((0, _validAttr2.default)('onLoadCapture')).toEqual(true);
    expect((0, _validAttr2.default)('onAnimationStart')).toEqual(true);
    expect((0, _validAttr2.default)('onAnimationStartCapture')).toEqual(true);
    expect((0, _validAttr2.default)('onAnimationEnd')).toEqual(true);
    expect((0, _validAttr2.default)('onAnimationEndCapture')).toEqual(true);
    expect((0, _validAttr2.default)('onAnimationIteration')).toEqual(true);
    expect((0, _validAttr2.default)('onAnimationIterationCapture')).toEqual(true);
    expect((0, _validAttr2.default)('onTransitionEnd')).toEqual(true);
    expect((0, _validAttr2.default)('onTransitionEndCapture')).toEqual(true);
  });
});