"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureRoutes = void 0;
const express_1 = require("express");
const authenticate_middleware_1 = require("../auth/authenticate.middleware");
const authorize_middleware_1 = require("../auth/authorize.middleware");
const adminController_1 = require("./adminController");
const configureRoutes = (app) => {
    const adminRouter = (0, express_1.Router)();
    adminRouter.use(authenticate_middleware_1.authenticate);
    adminRouter.use((0, authorize_middleware_1.authorize)(true));
    adminRouter.get('/:uid/make', adminController_1.makeAdmin);
    adminRouter.get('/:uid/revoke', adminController_1.revokeAdmin);
    app.use('/admin', adminRouter);
};
exports.configureRoutes = configureRoutes;
//# sourceMappingURL=routes.js.map