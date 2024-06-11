const assert = require('assert');
const controller = require('../../api/controllers/UsersController');
const {USER, RESPONSE} = require('../utils/index');
const sinon = require('sinon');

describe('UsersController', () => {
  it('Deve criar o usuário com sucesso', async () => {
    const substituicao1 =  sinon.stub(User, 'create').resolves(USER);
    // const substituicao2 =  sinon.stub(User.create, 'fetch').resolves(USER);
    

    const req = {
      body: USER,
    };

    await controller.create(req, RESPONSE);

    assert.strictEqual(substituicao1.calledOnceWith({name: USER.name, email: USER.email}), true);
    assert.strictEqual(RESPONSE.statusCode, 200);
    assert.deepStrictEqual(RESPONSE.body, {success: true});

    substituicao1.restore();
  });
});

describe('User (model)', () => {
  it('Deve criar o usuário com sucesso', async () => {
    let user = await User.create(USER).fetch();

    assert.strictEqual(user.id, USER.id)
    assert.strictEqual(user.email, USER.email)
    assert.strictEqual(user.name, USER.name)

  });
});


