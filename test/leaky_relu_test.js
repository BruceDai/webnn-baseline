'use strict';

import {leakyRelu} from '../src/leaky_relu.js';
import {Tensor} from '../src/tensor.js';
import * as utils from './utils.js';

describe('test leakyRelu', function() {
  function testLeakyRelu(input, expected, options = {}) {
    const inputTensor = new Tensor(input.shape, input.value);
    const outputTensor = leakyRelu(inputTensor, options);
    utils.checkValue(outputTensor, expected);
  }

  it('leakyRelu', function() {
    testLeakyRelu(
        {shape: [3], value: [-1, 0, 1]}, [-0.1, 0., 1.], {alpha: 0.1});
    testLeakyRelu(
        {
          shape: [3, 4, 5],
          value: [
            0.5945598,   -0.735546,   0.9624621,   0.7178781,   -2.2841945,
            1.4461595,   0.13227068,  -0.05931347, 0.25514695,  0.83969593,
            3.4556108,   1.6048287,   0.30937293,  -0.11302311, -0.55214405,
            0.15766327,  0.40505877,  0.7130178,   -0.53093743, 0.77193236,
            -1.6821449,  -0.8352944,  0.08011059,  0.53667474,  0.11023884,
            -0.61316216, 0.53726774,  -0.7437747,  -0.5286507,  1.2811732,
            -0.19160618, -0.5079444,  0.33344734,  1.4179748,   -0.09760198,
            1.0317479,   0.7191149,   0.9713708,   -0.32984316, 0.15518457,
            0.16741018,  -0.8231882,  0.24937603,  -1.1336567,  2.3608718,
            1.2201307,   -0.09541762, -0.61066127, 0.91480494,  0.9309983,
            -0.08354045, -0.44542325, 3.088639,    -0.90056187, 0.25742382,
            1.3762826,   0.39736032,  0.49137968,  -0.5622506,  1.1100211,
          ],
        },
        [
          0.5945598,
          -0.07355460000000001,
          0.9624621,
          0.7178781,
          -0.22841945,
          1.4461595,
          0.13227068,
          -0.005931347,
          0.25514695,
          0.83969593,
          3.4556108,
          1.6048287,
          0.30937293,
          -0.011302311,
          -0.055214405,
          0.15766327,
          0.40505877,
          0.7130178,
          -0.053093743000000006,
          0.77193236,
          -0.16821449,
          -0.08352944000000001,
          0.08011059,
          0.53667474,
          0.11023884,
          -0.06131621600000001,
          0.53726774,
          -0.07437747,
          -0.05286507000000001,
          1.2811732,
          -0.019160618,
          -0.050794439999999996,
          0.33344734,
          1.4179748,
          -0.009760198000000001,
          1.0317479,
          0.7191149,
          0.9713708,
          -0.03298431600000001,
          0.15518457,
          0.16741018,
          -0.08231882000000001,
          0.24937603,
          -0.11336567,
          2.3608718,
          1.2201307,
          -0.009541762,
          -0.061066127000000005,
          0.91480494,
          0.9309983,
          -0.008354045000000001,
          -0.044542325,
          3.088639,
          -0.09005618700000001,
          0.25742382,
          1.3762826,
          0.39736032,
          0.49137968,
          -0.05622506000000001,
          1.1100211,
        ],
        {alpha: 0.1});
  });

  it('leakyRelu default', function() {
    testLeakyRelu(
        {
          shape: [3, 4, 5],
          value: [
            1.2178663,   0.08626969,  -0.25983566, 0.03568677,  -1.5386598,
            0.2786136,   0.1057941,   -0.5374242,  -0.11235637, 0.07136911,
            1.1007954,   -0.3993358,  -1.5691061,  0.7312798,   0.7960611,
            0.6767248,   -0.30511293, 0.85154665,  -0.97270423, 0.33083355,
            -0.96259284, 1.0446007,   1.2399997,   -0.4430618,  -0.88743573,
            -1.1777387,  0.4861841,   1.0564232,   -0.92164683, -1.7308608,
            0.08230155,  -0.7713891,  -0.77213866, -1.0124619,  -1.2846667,
            1.0307417,   0.9004573,   -0.593318,   0.29095086,  -0.50655633,
            -0.6983193,  0.69927245,  -1.1014417,  -0.36207023, 1.1648387,
            0.0049276,   -0.12467039, 2.7892349,   0.8076212,   2.2155113,
            1.5295383,   -2.2338881,  -1.7535976,  -1.1389159,  -0.16080397,
            0.4859151,   0.34155434,  0.91066486,  0.65148973,  0.13155791,
          ],
        },
        [
          1.2178663,
          0.08626969,
          -0.0025983566000000002,
          0.03568677,
          -0.015386598000000001,
          0.2786136,
          0.1057941,
          -0.005374242,
          -0.0011235637,
          0.07136911,
          1.1007954,
          -0.003993358000000001,
          -0.015691061,
          0.7312798,
          0.7960611,
          0.6767248,
          -0.0030511293,
          0.85154665,
          -0.0097270423,
          0.33083355,
          -0.0096259284,
          1.0446007,
          1.2399997,
          -0.004430618,
          -0.0088743573,
          -0.011777387,
          0.4861841,
          1.0564232,
          -0.0092164683,
          -0.017308608,
          0.08230155,
          -0.0077138910000000005,
          -0.0077213865999999996,
          -0.010124619,
          -0.012846667,
          1.0307417,
          0.9004573,
          -0.005933180000000001,
          0.29095086,
          -0.0050655633,
          -0.0069831929999999995,
          0.69927245,
          -0.011014417,
          -0.0036207023,
          1.1648387,
          0.0049276,
          -0.0012467039000000001,
          2.7892349,
          0.8076212,
          2.2155113,
          1.5295383,
          -0.022338881,
          -0.017535976,
          -0.011389159,
          -0.0016080397,
          0.4859151,
          0.34155434,
          0.91066486,
          0.65148973,
          0.13155791,
        ]);
  });
});
