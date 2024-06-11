const assert = require('assert');
const controller = require('../../api/controllers/UsersController');
const {USER, RESPONSE} = require('../utils/index');
const sinon = require('sinon');

describe('UsersController', () => {
  it('Deve criar o usuário com sucesso', async () => {
    const createStub = sinon.stub(User, 'create').resolves();
  
    const req = {
      body: USER,
    };

    const resultado = await controller.create(req, RESPONSE);

    assert.strictEqual(RESPONSE.statusCode, 200);
    assert.strictEqual(createStub.calledOnce, true);
    assert.deepStrictEqual(resultado, {"success": true});

    createStub.restore();
  });
});
