import { SwaggerStruct } from '@/inner/../inner/swagger';

export const mockData: SwaggerStruct = {
  swagger: '2.0',
  info: {
    description: 'restful apis docs',
    version: '1.0',
    title: 'hippo penetrate: Restful APIs',
    termsOfService: '100.com',
  },
  host: 'testossapi.100.com',
  basePath: '/',
  tags: [
    {
      name: '4.0学生升年级扩科',
      description: 'Share Course Controller',
    },
    {
      name: 'FAQ功能',
      description: 'FAQ Controller',
    },
    {
      name: 'K12数据割接接口',
      description: 'K 12 Data Controller',
    },
    {
      name: 'login-controller',
      description: 'Login Controller',
    },
    {
      name: 'ppt-sjw',
      description: 'Ppt Controller',
    },
    {
      name: '业务类型-sjw',
      description: 'Busi Config Controller',
    },
    {
      name: '内容库-pjh',
      description: 'Knowledge Controller',
    },
    {
      name: '协议-ygy',
      description: 'Agreement Controller',
    },
    {
      name: '商品-hlh',
      description: 'Goods Controller',
    },
    {
      name: '商品发布',
      description: 'Goods Publish Controller',
    },
    {
      name: '学生信息-hlh',
      description: 'Student Controller',
    },
    {
      name: '学生协议-ygy',
      description: 'Student Agreement Controller',
    },
    {
      name: '客户端日志文件-pjh',
      description: 'Client Report Controller',
    },
    {
      name: '工具-sjw',
      description: 'Tools Controller',
    },
    {
      name: '幼儿园管理界面',
      description: 'School Controller',
    },
    {
      name: '教材-pjh',
      description: 'Text Book Controller',
    },
    {
      name: '文件上传-pjh',
      description: 'File Upload Controller',
    },
    {
      name: '用户消息',
      description: 'User Message Controller',
    },
    {
      name: '磨耳朵-ygy',
      description: 'Grind Ears Controller',
    },
    {
      name: '章节-pjh',
      description: 'Chapter Controller',
    },
    {
      name: '系统相关-pjh',
      description: 'Sys Controller',
    },
    {
      name: '线索',
      description: 'Case Controller',
    },
    {
      name: '线索渠道',
      description: 'Case Source Controller',
    },
    {
      name: '老师信息-zyx',
      description: 'Teacher Controller',
    },
    {
      name: '落地页',
      description: 'Landingpage Controller',
    },
    {
      name: '补偿管理-ygy',
      description: 'Lesson Compen Controller',
    },
    {
      name: '订单管理',
      description: 'Order Controller',
    },
    {
      name: '订单退费管理-ygy',
      description: 'Order Refund Controller',
    },
    {
      name: '试听排课-ygy',
      description: 'Try Lessonbiz Controller',
    },
    {
      name: '课件-hlh',
      description: 'Standard Class Courseware Controller',
    },
    {
      name: '课序-hlh',
      description: 'Standard Class Controller',
    },
    {
      name: '课程-sjw',
      description: 'Course Controller',
    },
    {
      name: '课程资源-sjw',
      description: 'Courseware Material Controller',
    },
    {
      name: '课节-sjw',
      description: 'Lesson Controller',
    },
    {
      name: '课节服务-pjh',
      description: 'Lessonbiz Controller',
    },
    {
      name: '账本管理',
      description: 'Course Account Controller',
    },
    {
      name: '赠课管理-ygy',
      description: 'Order Gift Controller',
    },
    {
      name: '通知',
      description: 'Notify Controller',
    },
  ],
  paths: {
    '/a/lgn/loginByCheckCookie.do': {
      get: {
        tags: [
          'login-controller',
        ],
        summary: 'loginByCheckCookie',
        operationId: 'loginByCheckCookieUsingGET',
        produces: [
          '*/*',
        ],
        responses: {
          200: {
            description: 'OK',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
      head: {
        tags: [
          'login-controller',
        ],
        summary: 'loginByCheckCookie',
        operationId: 'loginByCheckCookieUsingHEAD',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        responses: {
          200: {
            description: 'OK',
          },
          204: {
            description: 'No Content',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
        },
        deprecated: false,
      },
      post: {
        tags: [
          'login-controller',
        ],
        summary: 'loginByCheckCookie',
        operationId: 'loginByCheckCookieUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        responses: {
          200: {
            description: 'OK',
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
      put: {
        tags: [
          'login-controller',
        ],
        summary: 'loginByCheckCookie',
        operationId: 'loginByCheckCookieUsingPUT',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        responses: {
          200: {
            description: 'OK',
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
      delete: {
        tags: [
          'login-controller',
        ],
        summary: 'loginByCheckCookie',
        operationId: 'loginByCheckCookieUsingDELETE',
        produces: [
          '*/*',
        ],
        responses: {
          200: {
            description: 'OK',
          },
          204: {
            description: 'No Content',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
        },
        deprecated: false,
      },
      options: {
        tags: [
          'login-controller',
        ],
        summary: 'loginByCheckCookie',
        operationId: 'loginByCheckCookieUsingOPTIONS',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        responses: {
          200: {
            description: 'OK',
          },
          204: {
            description: 'No Content',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
        },
        deprecated: false,
      },
      patch: {
        tags: [
          'login-controller',
        ],
        summary: 'loginByCheckCookie',
        operationId: 'loginByCheckCookieUsingPATCH',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        responses: {
          200: {
            description: 'OK',
          },
          204: {
            description: 'No Content',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
        },
        deprecated: false,
      },
    },
    '/agreement/add': {
      post: {
        tags: [
          '协议-ygy',
        ],
        summary: '新增协议',
        operationId: 'addUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'agreementAddReq',
            description: 'agreementAddReq',
            required: true,
            schema: {
              $ref: '#/definitions/协议添加实体',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/BooleanRes«long»',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/agreement/list': {
      post: {
        tags: [
          '协议-ygy',
        ],
        summary: '获取协议列表',
        operationId: 'listUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'agreementPageReq',
            description: 'agreementPageReq',
            required: true,
            schema: {
              $ref: '#/definitions/协议分页请求实体',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/协议分页返回实体',
              },
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/agreement/onOffLine': {
      put: {
        tags: [
          '协议-ygy',
        ],
        summary: '协议上下线',
        operationId: 'onOffLineUsingPUT',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'agreementOnOffLineReq',
            description: 'agreementOnOffLineReq',
            required: true,
            schema: {
              $ref: '#/definitions/协议上下线 model',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/BooleanRes',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/agreement/page': {
      post: {
        tags: [
          '协议-ygy',
        ],
        summary: '获取协议分页列表',
        operationId: 'pageUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'agreementPageReq',
            description: 'agreementPageReq',
            required: true,
            schema: {
              $ref: '#/definitions/协议分页请求实体',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/Page«协议分页返回实体»',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/allCase/assign': {
      post: {
        tags: [
          '全部线索',
        ],
        summary: '线索分配',
        description: 'ResponseEntity $assign(cn.edu100.hippo.crm.server.dto.$assign59ApiCaseAssignDtoReq)',
        operationId: '$assign',
        parameters: [
          {
            in: 'body',
            name: 'assignDto',
            required: true,
            schema: {
              $ref: '#/definitions/$assign59ApiCaseAssignDtoReq',
            },
          },
        ],
        responses: {
          200: {
            schema: {
              type: 'boolean',
            },
          },
        },
        deprecated: false,
      },
    },
    '/allCase/discard': {
      post: {
        tags: [
          '全部线索',
        ],
        summary: '废弃线索',
        description: 'ResponseEntity $discard(cn.edu100.hippo.crm.server.dto.$discard59ApiCaseDiscardDtoReq)',
        operationId: '$discard',
        parameters: [
          {
            in: 'body',
            name: 'discardDto',
            required: true,
            schema: {
              $ref: '#/definitions/$discard59ApiCaseDiscardDtoReq',
            },
          },
        ],
        responses: {
          200: {
            schema: {
              $ref: '#/definitions/ResponseEntity',
            },
          },
        },
        deprecated: false,
      },
    },
    '/allCase/getById': {
      get: {
        tags: [
          '全部线索',
        ],
        summary: '根据ID查询线索信息',
        description: 'ResponseEntity $getById(java.lang.Long)',
        operationId: '$getById',
        parameters: [
          {
            name: 'id',
            in: 'query',
            required: true,
            type: 'integer',
            format: 'int64',
          },
        ],
        responses: {
          200: {
            schema: {
              $ref: '#/definitions/$getById59CrmCaseDtoRes',
            },
          },
        },
        deprecated: false,
      },
    },
    '/allCase/getByPhoneAndBusiType': {
      post: {
        tags: [
          '全部线索',
        ],
        summary: '根据手机号和业务类型查询线索详情',
        description: 'ResponseEntity $getByPhoneAndBusiType(java.lang.String,java.lang.Integer)',
        operationId: '$getByPhoneAndBusiType',
        parameters: [
          {
            name: 'phone',
            in: 'query',
            required: true,
            type: 'string',
          },
          {
            name: 'busiType',
            in: 'query',
            required: true,
            type: 'integer',
            format: 'int32',
          },
        ],
        responses: {
          200: {
            schema: {
              $ref: '#/definitions/$getByPhoneAndBusiType59CrmCaseDtoRes',
            },
          },
        },
        deprecated: false,
      },
    },
    '/busiConfig/add': {
      post: {
        tags: [
          '业务类型-sjw',
        ],
        summary: '新增业务类型',
        operationId: 'addUsingPOST_1',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'busiConfigReq',
            description: 'busiConfigReq',
            required: true,
            schema: {
              $ref: '#/definitions/字典 model',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/字典 model',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/busiConfig/delete/{id}': {
      delete: {
        tags: [
          '业务类型-sjw',
        ],
        summary: '删除业务类型',
        operationId: 'deleteUsingDELETE',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: '业务类型ID',
            required: true,
            type: 'integer',
            minimum: 1.0,
            exclusiveMinimum: false,
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/字典 model',
            },
          },
          204: {
            description: 'No Content',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
        },
        deprecated: false,
      },
    },
    '/busiConfig/get/{id}': {
      get: {
        tags: [
          '业务类型-sjw',
        ],
        summary: '根据id查询业务类型配置',
        operationId: 'getByIdUsingGET',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'id',
            required: true,
            type: 'integer',
            minimum: 1.0,
            exclusiveMinimum: false,
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/字典 model',
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/busiConfig/getBusiConfigs': {
      get: {
        tags: [
          '业务类型-sjw',
        ],
        summary: '查询业务类型列表',
        operationId: 'listByTypeUsingGET',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'type',
            in: 'query',
            description: '业务类别',
            required: true,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/字典 model',
              },
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/busiConfig/invalidateAll': {
      get: {
        tags: [
          '业务类型-sjw',
        ],
        summary: '清理缓存',
        operationId: 'invalidateAllUsingGET',
        produces: [
          '*/*',
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'object',
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/busiConfig/list': {
      post: {
        tags: [
          '业务类型-sjw',
        ],
        summary: '查询业务类型分页列表',
        operationId: 'listUsingPOST_1',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'busiConfigQueryReq',
            description: 'busiConfigQueryReq',
            required: true,
            schema: {
              $ref: '#/definitions/TbBusiConfigQueryReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/Page«字典 model»',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/busiConfig/page': {
      post: {
        tags: [
          '业务类型-sjw',
        ],
        summary: '查询业务类型分页列表',
        operationId: 'listUsingPOST_2',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'busiConfigQueryReq',
            description: 'busiConfigQueryReq',
            required: true,
            schema: {
              $ref: '#/definitions/TbBusiConfigQueryReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/Page«字典 model»',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/busiConfig/update/{id}': {
      put: {
        tags: [
          '业务类型-sjw',
        ],
        summary: '更新业务类型',
        operationId: 'updateUsingPUT',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'busiConfigReq',
            description: 'busiConfigReq',
            required: true,
            schema: {
              $ref: '#/definitions/字典 model',
            },
          },
          {
            name: 'id',
            in: 'path',
            description: '业务类型ID',
            required: true,
            type: 'integer',
            minimum: 1.0,
            exclusiveMinimum: false,
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/字典 model',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/callBack': {
      get: {
        tags: [
          'login-controller',
        ],
        summary: 'callBack',
        operationId: 'callBackUsingGET',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'redirectUrl',
            in: 'query',
            description: 'redirectUrl',
            required: false,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
      head: {
        tags: [
          'login-controller',
        ],
        summary: 'callBack',
        operationId: 'callBackUsingHEAD',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'redirectUrl',
            in: 'query',
            description: 'redirectUrl',
            required: false,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
          },
          204: {
            description: 'No Content',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
        },
        deprecated: false,
      },
      post: {
        tags: [
          'login-controller',
        ],
        summary: 'callBack',
        operationId: 'callBackUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'redirectUrl',
            in: 'query',
            description: 'redirectUrl',
            required: false,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
      put: {
        tags: [
          'login-controller',
        ],
        summary: 'callBack',
        operationId: 'callBackUsingPUT',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'redirectUrl',
            in: 'query',
            description: 'redirectUrl',
            required: false,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
      delete: {
        tags: [
          'login-controller',
        ],
        summary: 'callBack',
        operationId: 'callBackUsingDELETE',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'redirectUrl',
            in: 'query',
            description: 'redirectUrl',
            required: false,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
          },
          204: {
            description: 'No Content',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
        },
        deprecated: false,
      },
      options: {
        tags: [
          'login-controller',
        ],
        summary: 'callBack',
        operationId: 'callBackUsingOPTIONS',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'redirectUrl',
            in: 'query',
            description: 'redirectUrl',
            required: false,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
          },
          204: {
            description: 'No Content',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
        },
        deprecated: false,
      },
      patch: {
        tags: [
          'login-controller',
        ],
        summary: 'callBack',
        operationId: 'callBackUsingPATCH',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'redirectUrl',
            in: 'query',
            description: 'redirectUrl',
            required: false,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
          },
          204: {
            description: 'No Content',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
        },
        deprecated: false,
      },
    },
    '/case/add': {
      post: {
        tags: [
          '线索',
        ],
        summary: '新建线索',
        description: 'ResponseEntity $add(cn.edu100.hippo.crm.server.dto.$add52ApiCaseAddDtoReq)',
        operationId: '$add',
        parameters: [
          {
            in: 'body',
            name: 'addDto',
            required: true,
            schema: {
              $ref: '#/definitions/$add52ApiCaseAddDtoReq',
            },
          },
        ],
        responses: {
          200: {
            schema: {
              type: 'integer',
              format: 'int64',
            },
          },
        },
        deprecated: false,
      },
    },
    '/case/assign': {
      post: {
        tags: [
          '线索',
        ],
        summary: '线索分配',
        description: 'ResponseEntity $assign(cn.edu100.hippo.crm.server.dto.$assign52ApiCaseAssignDtoReq)',
        operationId: '$assign',
        parameters: [
          {
            in: 'body',
            name: 'assignDto',
            required: true,
            schema: {
              $ref: '#/definitions/$assign52ApiCaseAssignDtoReq',
            },
          },
        ],
        responses: {
          200: {
            schema: {
              type: 'boolean',
            },
          },
        },
        deprecated: false,
      },
    },
    '/case/discard': {
      post: {
        tags: [
          '线索',
        ],
        summary: '线索废弃',
        operationId: 'discardUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'discardReq',
            description: 'discardReq',
            required: true,
            schema: {
              $ref: '#/definitions/CaseDiscardReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/BooleanRes',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/case/getById': {
      get: {
        tags: [
          '线索',
        ],
        summary: '根据ID查询线索信息',
        operationId: 'getByIdUsingGET_1',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'id',
            in: 'query',
            description: 'id',
            required: true,
            type: 'integer',
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/CrmCaseRes',
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/case/getByPhoneAndBusiType': {
      get: {
        tags: [
          '线索',
        ],
        summary: '根据手机号和业务类型查询线索详情',
        description: 'ResponseEntity $getByPhoneAndBusiType(java.lang.String,java.lang.Integer)',
        operationId: '$getByPhoneAndBusiType',
        parameters: [
          {
            name: 'phone',
            in: 'query',
            required: true,
            type: 'string',
          },
          {
            name: 'busiType',
            in: 'query',
            required: true,
            type: 'integer',
            format: 'int32',
          },
        ],
        responses: {
          200: {
            schema: {
              $ref: '#/definitions/$getByPhoneAndBusiType52CrmCaseDtoRes',
            },
          },
        },
        deprecated: false,
      },
    },
    '/case/getCondition': {
      get: {
        tags: [
          '线索',
        ],
        summary: '获取线索状况',
        operationId: 'getCaseConditionUsingGET',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'caseId',
            in: 'query',
            description: 'caseId',
            required: true,
            type: 'integer',
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/CaseConditionRes',
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/case/handorder/add': {
      post: {
        tags: [
          '线索交接',
        ],
        summary: '添加线索交接',
        description: 'ResponseEntity $add(cn.edu100.hippo.crm.server.dto.$add57ApiCaseHandOrderAddDtoReq)',
        operationId: '$add',
        parameters: [
          {
            in: 'body',
            name: 'addDto',
            required: true,
            schema: {
              $ref: '#/definitions/$add57ApiCaseHandOrderAddDtoReq',
            },
          },
        ],
        responses: {
          200: {
            schema: {
              type: 'integer',
              format: 'int64',
            },
          },
        },
        deprecated: false,
      },
    },
    '/case/page': {
      post: {
        tags: [
          '线索',
        ],
        summary: '线索分页查询1',
        operationId: 'pageAllUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'crmCaseReq',
            description: 'crmCaseReq',
            required: true,
            schema: {
              $ref: '#/definitions/CrmCaseReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/Page«CrmCaseRes»',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/case/pageOffice': {
      post: {
        tags: [
          '线索',
        ],
        summary: '获取本组渠道所有线索信息',
        operationId: 'pageOfficeUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'crmCaseReq',
            description: 'crmCaseReq',
            required: true,
            schema: {
              $ref: '#/definitions/CrmCaseReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/Page«CrmCaseRes»',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/case/register': {
      post: {
        tags: [
          '线索',
        ],
        summary: '线索注册',
        description: 'ResponseEntity $register(cn.edu100.hippo.crm.server.dto.$register52ApiCaseRegisterDtoReq)',
        operationId: '$register',
        parameters: [
          {
            in: 'body',
            name: 'registerDto',
            required: true,
            schema: {
              $ref: '#/definitions/$register52ApiCaseRegisterDtoReq',
            },
          },
        ],
        responses: {
          200: {
            schema: {
              type: 'integer',
              format: 'int64',
            },
          },
        },
        deprecated: false,
      },
    },
    '/case/updateBase': {
      post: {
        tags: [
          '线索',
        ],
        summary: '线索更新',
        operationId: 'updateBaseUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'updateReq',
            description: 'updateReq',
            required: true,
            schema: {
              $ref: '#/definitions/CaseUpdateReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/BooleanRes',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/case/updateBaseInfo': {
      post: {
        tags: [
          '线索',
        ],
        summary: '更新线索基本信息',
        description: 'ResponseEntity $updateBaseInfo(cn.edu100.hippo.crm.server.dto.$updateBaseInfo52ApiCaseUpdateDtoReq)',
        operationId: '$updateBaseInfo',
        parameters: [
          {
            in: 'body',
            name: 'updateDto',
            required: true,
            schema: {
              $ref: '#/definitions/$updateBaseInfo52ApiCaseUpdateDtoReq',
            },
          },
        ],
        responses: {
          200: {
            schema: {
              type: 'boolean',
            },
          },
        },
        deprecated: false,
      },
    },
    '/casesource/getByCode': {
      get: {
        tags: [
          '线索来源',
        ],
        summary: '根据来源code获取来源信息',
        description: 'ResponseEntity $getByCode(java.lang.String)',
        operationId: '$getByCode',
        parameters: [
          {
            name: 'code',
            in: 'query',
            required: false,
            type: 'string',
          },
        ],
        responses: {
          200: {
            schema: {
              $ref: '#/definitions/$getByCode54CrmCaseSourceDtoRes',
            },
          },
        },
        deprecated: false,
      },
    },
    '/casesource/list': {
      post: {
        tags: [
          '线索来源',
        ],
        summary: '线索来源列表',
        description: 'ResponseEntity $list(cn.edu100.hippo.crm.server.dto.$list54ApiCrmCaseSourceParamDtoReq)',
        operationId: '$list',
        parameters: [
          {
            in: 'body',
            name: 'crmCaseSourceParamDto',
            required: false,
            schema: {
              $ref: '#/definitions/$list54ApiCrmCaseSourceParamDtoReq',
            },
          },
        ],
        responses: {
          200: {
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/$list54CrmCaseSourceDtoRes',
              },
            },
          },
        },
        deprecated: false,
      },
    },
    '/casesource/page': {
      post: {
        tags: [
          '线索来源',
        ],
        summary: '线索来源分页列表',
        description: 'ResponseEntity $page(cn.edu100.hippo.crm.server.dto.$page54ApiCrmCaseSourceParamDtoReq)',
        operationId: '$page',
        parameters: [
          {
            in: 'body',
            name: 'crmCaseSourceParamDto',
            required: false,
            schema: {
              $ref: '#/definitions/$page54ApiCrmCaseSourceParamDtoReq',
            },
          },
        ],
        responses: {
          200: {
            schema: {
              type: 'object',
              properties: {
                first: {
                  type: 'integer',
                  format: 'int32',
                },
                firstPage: {
                  type: 'boolean',
                },
                last: {
                  type: 'integer',
                  format: 'int32',
                },
                lastPage: {
                  type: 'boolean',
                },
                list: {
                  type: 'array',
                  items: {
                    $ref: '#/definitions/$page54CrmCaseSourceDtoRes',
                  },
                },
                next: {
                  type: 'integer',
                  format: 'int32',
                },
                pageNo: {
                  type: 'integer',
                  format: 'int32',
                },
                pageSize: {
                  type: 'integer',
                  format: 'int64',
                },
                prev: {
                  type: 'integer',
                  format: 'int32',
                },
                total: {
                  type: 'integer',
                  format: 'int64',
                },
              },
            },
          },
        },
        deprecated: false,
      },
    },
    '/casevisit/add': {
      post: {
        tags: [
          '线索回访',
        ],
        summary: '添加线索回访',
        description: 'ResponseEntity $add(cn.edu100.hippo.crm.server.dto.$add53ApiCaseVisitAddDtoReq)',
        operationId: '$add',
        parameters: [
          {
            in: 'body',
            name: 'addDto',
            required: true,
            schema: {
              $ref: '#/definitions/$add53ApiCaseVisitAddDtoReq',
            },
          },
        ],
        responses: {
          200: {
            schema: {
              type: 'integer',
              format: 'int64',
            },
          },
        },
        deprecated: false,
      },
    },
    '/casevisit/page': {
      post: {
        tags: [
          '线索回访',
        ],
        summary: '线索回访分页列表',
        description: 'ResponseEntity $page(cn.edu100.hippo.crm.server.dto.$page53ApiCaseVisitQryDtoReq)',
        operationId: '$page',
        parameters: [
          {
            in: 'body',
            name: 'qryDto',
            required: true,
            schema: {
              $ref: '#/definitions/$page53ApiCaseVisitQryDtoReq',
            },
          },
        ],
        responses: {
          200: {
            schema: {
              type: 'object',
              properties: {
                first: {
                  type: 'integer',
                  format: 'int32',
                },
                firstPage: {
                  type: 'boolean',
                },
                last: {
                  type: 'integer',
                  format: 'int32',
                },
                lastPage: {
                  type: 'boolean',
                },
                list: {
                  type: 'array',
                  items: {
                    $ref: '#/definitions/$page53CrmCaseVisitDtoRes',
                  },
                },
                next: {
                  type: 'integer',
                  format: 'int32',
                },
                pageNo: {
                  type: 'integer',
                  format: 'int32',
                },
                pageSize: {
                  type: 'integer',
                  format: 'int64',
                },
                prev: {
                  type: 'integer',
                  format: 'int32',
                },
                total: {
                  type: 'integer',
                  format: 'int64',
                },
              },
            },
          },
        },
        deprecated: false,
      },
    },
    '/chapter/ev/add': {
      post: {
        tags: [
          '章节-pjh',
        ],
        summary: '新增章节',
        operationId: 'addUsingPOST_3',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'chapterAddReq',
            description: 'chapterAddReq',
            required: true,
            schema: {
              $ref: '#/definitions/ChapterAddReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/chapter/ev/siblings/{id}': {
      get: {
        tags: [
          '章节-pjh',
        ],
        summary: '获取章节兄弟节点',
        description: 'chapterId为null或0时，表示教材，返回空列表',
        operationId: 'listSiblingsUsingGET',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: '章节ID',
            required: true,
            type: 'integer',
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/ChapterRes',
              },
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/chapter/ev/update/{id}': {
      put: {
        tags: [
          '章节-pjh',
        ],
        summary: '更新章节',
        operationId: 'updateUsingPUT_2',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'chapterUpdateReq',
            description: 'chapterUpdateReq',
            required: true,
            schema: {
              $ref: '#/definitions/ChapterUpdateReq',
            },
          },
          {
            name: 'id',
            in: 'path',
            description: '章节ID',
            required: true,
            type: 'integer',
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/chapter/ev/updateContent/{id}': {
      put: {
        tags: [
          '章节-pjh',
        ],
        summary: '更新章节教学内容',
        description: '审核通过状态教材下的章节，只能编辑内容',
        operationId: 'updateContentUsingPUT',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: '章节ID',
            required: true,
            type: 'integer',
            format: 'int64',
          },
          {
            in: 'body',
            name: 'updateContentReq',
            description: 'updateContentReq',
            required: true,
            schema: {
              $ref: '#/definitions/ChapterUpdateContentReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'integer',
              format: 'int32',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/chapter/ev/{id}': {
      delete: {
        tags: [
          '章节-pjh',
        ],
        summary: '删除章节',
        operationId: 'deleteUsingDELETE_2',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: '章节ID',
            required: true,
            type: 'integer',
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'integer',
              format: 'int64',
            },
          },
          204: {
            description: 'No Content',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
        },
        deprecated: false,
      },
    },
    '/chapter/getByIdAndType': {
      get: {
        tags: [
          '章节-pjh',
        ],
        summary: '查询章节详情',
        operationId: 'getByIdAndTypeUsingGET',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'chapterId',
            in: 'query',
            description: '章节ID',
            required: true,
            type: 'integer',
            minimum: 1.0,
            exclusiveMinimum: false,
            format: 'int64',
          },
          {
            name: 'type',
            in: 'query',
            description: '0-已发布版本、1-编辑版本、2-两个版本都返回',
            required: true,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/ChapterGetRes',
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/clientUpload/api/page': {
      post: {
        tags: [
          '客户端日志文件-pjh',
        ],
        summary: '根据uid，手机号，日志上传的原因类型，上报起始时间，上报结束时间，分页查询日志文件的列表,基于ip认证，需要配置ip白名单',
        operationId: 'pageJsonByReportParamUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'clientReportReq',
            description: '日志查询对象',
            required: true,
            schema: {
              $ref: '#/definitions/ClientReportReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/Page«ClientReportRes»',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/clientUpload/get/{id}': {
      get: {
        tags: [
          '客户端日志文件-pjh',
        ],
        summary: '查询单个日志文件信息',
        operationId: 'getUsingGET',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: '文件记录id',
            required: true,
            type: 'integer',
            minimum: 0.0,
            exclusiveMinimum: false,
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/ClientReportRes',
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/clientUpload/page': {
      post: {
        tags: [
          '客户端日志文件-pjh',
        ],
        summary: '根据uid，手机号，日志上传的原因类型，上报起始时间，上报结束时间，分页查询日志文件的列表,基于cookie认证',
        operationId: 'pageByReportParamUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'clientReportReq',
            description: '日志查询对象',
            required: true,
            schema: {
              $ref: '#/definitions/ClientReportReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/Page«ClientReportRes»',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/course/add': {
      post: {
        tags: [
          '课程-sjw',
        ],
        summary: '新增课程',
        operationId: 'addUsingPOST_4',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'courseAddReq',
            description: 'courseAddReq',
            required: true,
            schema: {
              $ref: '#/definitions/课程新增参数',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'integer',
              format: 'int64',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/course/approve/{id}': {
      put: {
        tags: [
          '课程-sjw',
        ],
        summary: '课程审核',
        description: '必传参数:{"id": "课程id(产品id)", "approveMsg": "审核意见",\n"approveResult": 审核结果 1 通过 0 不通过}',
        operationId: 'approveUsingPUT',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'approveReq',
            description: '审核参数对象',
            required: true,
            schema: {
              $ref: '#/definitions/ProductApproveReq',
            },
          },
          {
            name: 'id',
            in: 'path',
            description: '课程ID',
            required: true,
            type: 'integer',
            minimum: 1.0,
            exclusiveMinimum: false,
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'integer',
              format: 'int64',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/course/get/{id}': {
      get: {
        tags: [
          '课程-sjw',
        ],
        summary: '根据id查询课程信息',
        operationId: 'getUsingGET_1',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: '课程id',
            required: true,
            type: 'integer',
            minimum: 1.0,
            exclusiveMinimum: false,
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/课程返回model',
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/course/list': {
      post: {
        tags: [
          '课程-sjw',
        ],
        summary: '查询课程分页列表',
        operationId: 'pageUsingPOST_1',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'courseReq',
            description: 'courseReq',
            required: true,
            schema: {
              $ref: '#/definitions/课程查询model',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/Page«课程返回model»',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/course/offline/{id}': {
      put: {
        tags: [
          '课程-sjw',
        ],
        summary: '下线课程',
        operationId: 'offlineUsingPUT',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: '课程ID',
            required: true,
            type: 'integer',
            minimum: 1.0,
            exclusiveMinimum: false,
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'integer',
              format: 'int64',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/course/standardClass/{courseId}': {
      get: {
        tags: [
          '课程-sjw',
        ],
        summary: '获取学生课程下的所有课序',
        operationId: 'listStandardClassByCourseIdUsingGET',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'courseId',
            in: 'path',
            description: '课程ID',
            required: true,
            type: 'integer',
            minimum: 1.0,
            exclusiveMinimum: false,
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/课序Model',
              },
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/course/student/{uid}': {
      get: {
        tags: [
          '课程-sjw',
        ],
        summary: '查询学生购买课程',
        operationId: 'listBySuidUsingGET',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'classType',
            in: 'query',
            description: '课程类型，字典：classType',
            required: false,
            type: 'ref',
          },
          {
            name: 'uid',
            in: 'path',
            description: '学生ID',
            required: true,
            type: 'integer',
            minimum: 1.0,
            exclusiveMinimum: false,
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/学生课程Model',
              },
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/course/update/{id}': {
      put: {
        tags: [
          '课程-sjw',
        ],
        summary: '修改课程',
        operationId: 'updateUsingPUT_3',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'courseAddReq',
            description: 'courseAddReq',
            required: true,
            schema: {
              $ref: '#/definitions/课程新增参数',
            },
          },
          {
            name: 'id',
            in: 'path',
            description: '课程ID',
            required: true,
            type: 'integer',
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'integer',
              format: 'int64',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/courseAccount/getCourseAccount': {
      get: {
        tags: [
          '账本管理',
        ],
        summary: '获取课程账本',
        operationId: 'getCourseAccountUsingGET',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'courseId',
            in: 'query',
            description: '排课课程id',
            required: true,
            type: 'integer',
            minimum: 1.0,
            exclusiveMinimum: false,
            format: 'int64',
          },
          {
            name: 'lessonCourseId',
            in: 'query',
            description: '账本消耗课程id',
            required: true,
            type: 'integer',
            minimum: 1.0,
            exclusiveMinimum: false,
            format: 'int64',
          },
          {
            name: 'uid',
            in: 'query',
            description: '学生id',
            required: true,
            type: 'integer',
            minimum: 1.0,
            exclusiveMinimum: false,
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/账本 model',
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/courseAccount/getLessonConsumeDetail': {
      post: {
        tags: [
          '账本管理',
        ],
        summary: '获取课节消耗账本明细',
        operationId: 'getLessonConsumeDetailUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'lessonId',
            in: 'query',
            description: 'lessonId',
            required: true,
            type: 'integer',
            minimum: 1.0,
            exclusiveMinimum: false,
            format: 'int64',
          },
          {
            name: 'uid',
            in: 'query',
            description: 'uid',
            required: true,
            type: 'integer',
            minimum: 1.0,
            exclusiveMinimum: false,
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/LessonConsumeDetailRes',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/courseAccount/pageApplyLog': {
      post: {
        tags: [
          '账本管理',
        ],
        summary: '账本日志分页列表',
        operationId: 'pageApplyLogUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'courseAccountLogPageReq',
            description: 'courseAccountLogPageReq',
            required: true,
            schema: {
              $ref: '#/definitions/账本日志请求 model',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/Page«账本日志 model»',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/courseAccount/pageAvailableCourse': {
      post: {
        tags: [
          '账本管理',
        ],
        summary: '分页获取学生已开课程课程账本',
        operationId: 'pageAvailableCourseUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'availableCoursePageReq',
            description: 'availableCoursePageReq',
            required: true,
            schema: {
              $ref: '#/definitions/已开课程分页列表请求model',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/Page«学生已开课程分页结果 model»',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/courseware/add': {
      post: {
        tags: [
          '课件-hlh',
        ],
        summary: '新增课件',
        operationId: 'addUsingPOST_15',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'classCourseware',
            description: 'classCourseware',
            required: true,
            schema: {
              $ref: '#/definitions/课件新增查询 model',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'integer',
              format: 'int64',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/courseware/approve/{id}': {
      put: {
        tags: [
          '课件-hlh',
        ],
        summary: '审核课件',
        operationId: 'approveUsingPUT_1',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'approveMsg',
            in: 'query',
            description: '审核意见',
            required: true,
            type: 'ref',
          },
          {
            name: 'approveResult',
            in: 'query',
            description: '审核结果, 0待审核/1审核通过/2审核不通过/10废弃',
            required: true,
            type: 'ref',
            minimum: 0.0,
            exclusiveMinimum: false,
          },
          {
            name: 'id',
            in: 'path',
            description: '课序课件id',
            required: true,
            type: 'integer',
            minimum: 1.0,
            exclusiveMinimum: false,
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'boolean',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/courseware/get/{id}': {
      get: {
        tags: [
          '课件-hlh',
        ],
        summary: '根据课件ID查询课件',
        operationId: 'getUsingGET_8',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: '课件id',
            required: true,
            type: 'integer',
            minimum: 1.0,
            exclusiveMinimum: false,
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/StandardClassCoursewareRes',
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/courseware/list': {
      post: {
        tags: [
          '课件-hlh',
        ],
        summary: '根据课件名称、课件状态、更新时间、更新人查询课件',
        operationId: 'pageUsingPOST_11',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'req',
            description: 'req',
            required: false,
            schema: {
              $ref: '#/definitions/课件列表查询 model',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/Page«StandardClassCoursewareRes»',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/courseware/material/add': {
      post: {
        tags: [
          '课程资源-sjw',
        ],
        summary: '新增课程资源',
        operationId: 'addUsingPOST_5',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'materialParam',
            description: 'materialParam',
            required: true,
            schema: {
              $ref: '#/definitions/CoursewareMaterialAddReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'boolean',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/courseware/material/list': {
      post: {
        tags: [
          '课程资源-sjw',
        ],
        summary: '查询课程资源列表',
        operationId: 'pageUsingPOST_2',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'materialParam',
            description: '课件查询',
            required: true,
            schema: {
              $ref: '#/definitions/TbCoursewareMaterialDto',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/Page«CoursewareMaterialRes»',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/courseware/material/offShelves/{id}': {
      put: {
        tags: [
          '课程资源-sjw',
        ],
        summary: '下线课程资源',
        operationId: 'offShelvesUsingPUT',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: '资源ID',
            required: true,
            type: 'integer',
            minimum: 0.0,
            exclusiveMinimum: false,
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'integer',
              format: 'int64',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/courseware/material/upShelves/{id}': {
      put: {
        tags: [
          '课程资源-sjw',
        ],
        summary: '发布课程资源',
        operationId: 'upShelvesUsingPUT',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: '资源ID',
            required: true,
            type: 'integer',
            minimum: 0.0,
            exclusiveMinimum: false,
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'integer',
              format: 'int64',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/courseware/material/update/{id}': {
      put: {
        tags: [
          '课程资源-sjw',
        ],
        summary: '修改课程资源修改',
        operationId: 'updateUsingPUT_4',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: '资源ID',
            required: true,
            type: 'integer',
            minimum: 0.0,
            exclusiveMinimum: false,
            format: 'int64',
          },
          {
            in: 'body',
            name: 'materialParam',
            description: 'materialParam',
            required: true,
            schema: {
              $ref: '#/definitions/CoursewareMaterialAddReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'boolean',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/courseware/ppt/add': {
      post: {
        tags: [
          '课件-hlh',
        ],
        summary: 'pptAdd',
        operationId: 'pptAddUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'req',
            description: 'req',
            required: true,
            schema: {
              $ref: '#/definitions/CoursewarePptAddReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/CoursewarePptAddRes',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/courseware/ppt/get/{id}': {
      get: {
        tags: [
          '课件-hlh',
        ],
        summary: 'pptGet',
        operationId: 'pptGetUsingGET',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'id',
            required: true,
            type: 'integer',
            minimum: 1.0,
            exclusiveMinimum: false,
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/CoursewarePptRes',
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/courseware/ppt/page': {
      post: {
        tags: [
          '课件-hlh',
        ],
        summary: 'pptPage',
        operationId: 'pptPageUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'req',
            description: 'req',
            required: true,
            schema: {
              $ref: '#/definitions/CoursewarePptPageReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/Page«CoursewarePptPageRes»',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/courseware/ppt/{id}': {
      delete: {
        tags: [
          '课件-hlh',
        ],
        summary: 'pptDelete',
        operationId: 'pptDeleteUsingDELETE',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'id',
            required: true,
            type: 'integer',
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'integer',
              format: 'int64',
            },
          },
          204: {
            description: 'No Content',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
        },
        deprecated: false,
      },
    },
    '/courseware/update/{id}': {
      put: {
        tags: [
          '课件-hlh',
        ],
        summary: '修改课件',
        operationId: 'updateUsingPUT_9',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'classCourseware',
            description: 'classCourseware',
            required: true,
            schema: {
              $ref: '#/definitions/课件新增查询 model',
            },
          },
          {
            name: 'id',
            in: 'path',
            description: 'id',
            required: true,
            type: 'integer',
            minimum: 1.0,
            exclusiveMinimum: false,
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'integer',
              format: 'int64',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/courseware/xml/add': {
      post: {
        tags: [
          '课件-hlh',
        ],
        summary: 'xmlAdd',
        operationId: 'xmlAddUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'req',
            description: 'req',
            required: true,
            schema: {
              $ref: '#/definitions/CoursewareXmlAddReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/CoursewareXmlAddRes',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/courseware/xml/get/{id}': {
      get: {
        tags: [
          '课件-hlh',
        ],
        summary: 'xmlGet',
        operationId: 'xmlGetUsingGET',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'id',
            required: true,
            type: 'integer',
            minimum: 1.0,
            exclusiveMinimum: false,
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/CoursewareXmlRes',
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/courseware/xml/page': {
      post: {
        tags: [
          '课件-hlh',
        ],
        summary: 'xmlPage',
        operationId: 'xmlPageUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'req',
            description: 'req',
            required: true,
            schema: {
              $ref: '#/definitions/CoursewareXmlPageReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/Page«CoursewareXmlPageRes»',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/courseware/xml/{id}': {
      delete: {
        tags: [
          '课件-hlh',
        ],
        summary: 'xmlDelete',
        operationId: 'xmlDeleteUsingDELETE',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'id',
            required: true,
            type: 'integer',
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'integer',
              format: 'int64',
            },
          },
          204: {
            description: 'No Content',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
        },
        deprecated: false,
      },
    },
    '/crmCaseSource/add': {
      post: {
        tags: [
          '线索渠道',
        ],
        summary: '新增渠道线索',
        operationId: 'addUsingPOST_2',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'crmCaseSourceAddReq',
            description: 'crmCaseSourceAddReq',
            required: true,
            schema: {
              $ref: '#/definitions/CrmCaseSourceAddReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/CrmCaseSourceRes',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/crmCaseSource/delete': {
      delete: {
        tags: [
          '线索渠道',
        ],
        summary: '删除渠道线索',
        operationId: 'deleteUsingDELETE_1',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'crmCaseSourceDelReq',
            description: 'crmCaseSourceDelReq',
            required: true,
            schema: {
              $ref: '#/definitions/CrmCaseSourceDelReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/CrmCaseSourceRes',
            },
          },
          204: {
            description: 'No Content',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
        },
        deprecated: false,
      },
    },
    '/crmCaseSource/list': {
      post: {
        tags: [
          '线索渠道',
        ],
        summary: '获取所有渠道线索信息',
        operationId: 'listUsingPOST_3',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'crmCaseSourceReq',
            description: 'crmCaseSourceReq',
            required: true,
            schema: {
              $ref: '#/definitions/CrmCaseSourceReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/CrmCaseSourceRes',
              },
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/crmCaseSource/update': {
      put: {
        tags: [
          '线索渠道',
        ],
        summary: '更新渠道线索',
        operationId: 'updateUsingPUT_1',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'crmCaseSourceEditReq',
            description: 'crmCaseSourceEditReq',
            required: true,
            schema: {
              $ref: '#/definitions/CrmCaseSourceEditReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/CrmCaseSourceRes',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/denycallback': {
      get: {
        tags: [
          'login-controller',
        ],
        summary: 'denycallback',
        operationId: 'denycallbackUsingGET',
        produces: [
          '*/*',
        ],
        responses: {
          200: {
            description: 'OK',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
      head: {
        tags: [
          'login-controller',
        ],
        summary: 'denycallback',
        operationId: 'denycallbackUsingHEAD',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        responses: {
          200: {
            description: 'OK',
          },
          204: {
            description: 'No Content',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
        },
        deprecated: false,
      },
      post: {
        tags: [
          'login-controller',
        ],
        summary: 'denycallback',
        operationId: 'denycallbackUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        responses: {
          200: {
            description: 'OK',
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
      put: {
        tags: [
          'login-controller',
        ],
        summary: 'denycallback',
        operationId: 'denycallbackUsingPUT',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        responses: {
          200: {
            description: 'OK',
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
      delete: {
        tags: [
          'login-controller',
        ],
        summary: 'denycallback',
        operationId: 'denycallbackUsingDELETE',
        produces: [
          '*/*',
        ],
        responses: {
          200: {
            description: 'OK',
          },
          204: {
            description: 'No Content',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
        },
        deprecated: false,
      },
      options: {
        tags: [
          'login-controller',
        ],
        summary: 'denycallback',
        operationId: 'denycallbackUsingOPTIONS',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        responses: {
          200: {
            description: 'OK',
          },
          204: {
            description: 'No Content',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
        },
        deprecated: false,
      },
      patch: {
        tags: [
          'login-controller',
        ],
        summary: 'denycallback',
        operationId: 'denycallbackUsingPATCH',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        responses: {
          200: {
            description: 'OK',
          },
          204: {
            description: 'No Content',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
        },
        deprecated: false,
      },
    },
    '/discardCase/page': {
      post: {
        tags: [
          '废弃线索',
        ],
        summary: '分页获取废弃线索',
        description: 'ResponseEntity $page(cn.edu100.hippo.crm.server.dto.$page60ApiCrmCaseQryDtoReq)',
        operationId: '$page',
        parameters: [
          {
            in: 'body',
            name: 'qryDto',
            required: true,
            schema: {
              $ref: '#/definitions/$page60ApiCrmCaseQryDtoReq',
            },
          },
        ],
        responses: {
          200: {
            schema: {
              type: 'object',
              properties: {
                first: {
                  type: 'integer',
                  format: 'int32',
                },
                firstPage: {
                  type: 'boolean',
                },
                last: {
                  type: 'integer',
                  format: 'int32',
                },
                lastPage: {
                  type: 'boolean',
                },
                list: {
                  type: 'array',
                  items: {
                    $ref: '#/definitions/$page60CrmCaseDtoRes',
                  },
                },
                next: {
                  type: 'integer',
                  format: 'int32',
                },
                pageNo: {
                  type: 'integer',
                  format: 'int32',
                },
                pageSize: {
                  type: 'integer',
                  format: 'int64',
                },
                prev: {
                  type: 'integer',
                  format: 'int32',
                },
                total: {
                  type: 'integer',
                  format: 'int64',
                },
              },
            },
          },
        },
        deprecated: false,
      },
    },
    '/faq/add': {
      post: {
        tags: [
          'FAQ功能',
        ],
        summary: 'FAQ添加分类子内容',
        operationId: 'addUsingPOST_6',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'faqAddReq',
            description: 'faqAddReq',
            required: true,
            schema: {
              $ref: '#/definitions/Faq新增请求对象',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/BooleanRes«long»',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/faq/category/add': {
      post: {
        tags: [
          'FAQ功能',
        ],
        summary: 'FAQ添加分类',
        operationId: 'addCategoryUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'faqAddReq',
            description: 'faqAddReq',
            required: true,
            schema: {
              $ref: '#/definitions/Faq新增分类请求对象',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/BooleanRes«long»',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/faq/category/updateTop': {
      post: {
        tags: [
          'FAQ功能',
        ],
        summary: 'Faq更新分类置顶',
        operationId: 'updateCategoryTopUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'topReq',
            description: 'topReq',
            required: true,
            schema: {
              $ref: '#/definitions/Faq置顶请求对象',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/BooleanRes«int»',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/faq/delete': {
      post: {
        tags: [
          'FAQ功能',
        ],
        summary: 'Faq删除分类或者分类中对应的内容',
        operationId: 'updateStatusUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'statusReq',
            description: 'statusReq',
            required: true,
            schema: {
              $ref: '#/definitions/Faq删除传入对象',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/BooleanRes«int»',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/faq/list': {
      post: {
        tags: [
          'FAQ功能',
        ],
        summary: '快捷入口',
        operationId: 'listEntryUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'req',
            description: 'req',
            required: true,
            schema: {
              $ref: '#/definitions/快捷入口入参',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/快捷入口出参',
              },
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/faq/listAll': {
      post: {
        tags: [
          'FAQ功能',
        ],
        summary: 'FAQ管理',
        operationId: 'listAllUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'req',
            description: 'req',
            required: true,
            schema: {
              $ref: '#/definitions/FAQ管理入参',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/FAQ管理出参',
              },
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/faq/update': {
      post: {
        tags: [
          'FAQ功能',
        ],
        summary: 'Faq更新分类跟内容',
        operationId: 'updateUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'faqUpdateReq',
            description: 'faqUpdateReq',
            required: true,
            schema: {
              $ref: '#/definitions/Faq更新请求对象',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/BooleanRes«int»',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/faq/updateTop': {
      post: {
        tags: [
          'FAQ功能',
        ],
        summary: 'Faq更新内容置顶',
        operationId: 'updateTopUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'contentTopReq',
            description: 'contentTopReq',
            required: true,
            schema: {
              $ref: '#/definitions/Faq内容置顶请求入参',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/BooleanRes«int»',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/fileupload/base64Upload': {
      post: {
        tags: [
          '文件上传-pjh',
        ],
        summary: '传入base64编码的byte数组，后台转为文件',
        operationId: 'base64UploadUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'req',
            description: 'req',
            required: true,
            schema: {
              $ref: '#/definitions/Base64UploadReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'object',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/fileupload/beforeupload': {
      get: {
        tags: [
          '文件上传-pjh',
        ],
        summary: 'beforeuploadNone',
        operationId: 'beforeuploadNoneUsingGET',
        produces: [
          'application/json;charset=UTF-8',
        ],
        parameters: [
          {
            name: 'fileName',
            in: 'query',
            description: 'fileName',
            required: false,
            type: 'string',
          },
          {
            name: 'lastmodtime',
            in: 'query',
            description: 'lastmodtime',
            required: false,
            type: 'string',
          },
          {
            name: 'resourceType',
            in: 'query',
            description: 'resourceType',
            required: false,
            type: 'integer',
            format: 'int32',
          },
          {
            name: 'totalsize',
            in: 'query',
            description: 'totalsize',
            required: false,
            type: 'integer',
            format: 'int64',
          },
          {
            name: 'uid',
            in: 'query',
            description: 'uid',
            required: false,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'object',
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
      head: {
        tags: [
          '文件上传-pjh',
        ],
        summary: 'beforeuploadNone',
        operationId: 'beforeuploadNoneUsingHEAD',
        consumes: [
          'application/json',
        ],
        produces: [
          'application/json;charset=UTF-8',
        ],
        parameters: [
          {
            name: 'fileName',
            in: 'query',
            description: 'fileName',
            required: false,
            type: 'string',
          },
          {
            name: 'lastmodtime',
            in: 'query',
            description: 'lastmodtime',
            required: false,
            type: 'string',
          },
          {
            name: 'resourceType',
            in: 'query',
            description: 'resourceType',
            required: false,
            type: 'integer',
            format: 'int32',
          },
          {
            name: 'totalsize',
            in: 'query',
            description: 'totalsize',
            required: false,
            type: 'integer',
            format: 'int64',
          },
          {
            name: 'uid',
            in: 'query',
            description: 'uid',
            required: false,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'object',
            },
          },
          204: {
            description: 'No Content',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
        },
        deprecated: false,
      },
      post: {
        tags: [
          '文件上传-pjh',
        ],
        summary: 'beforeuploadNone',
        operationId: 'beforeuploadNoneUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          'application/json;charset=UTF-8',
        ],
        parameters: [
          {
            name: 'fileName',
            in: 'query',
            description: 'fileName',
            required: false,
            type: 'string',
          },
          {
            name: 'lastmodtime',
            in: 'query',
            description: 'lastmodtime',
            required: false,
            type: 'string',
          },
          {
            name: 'resourceType',
            in: 'query',
            description: 'resourceType',
            required: false,
            type: 'integer',
            format: 'int32',
          },
          {
            name: 'totalsize',
            in: 'query',
            description: 'totalsize',
            required: false,
            type: 'integer',
            format: 'int64',
          },
          {
            name: 'uid',
            in: 'query',
            description: 'uid',
            required: false,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'object',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
      put: {
        tags: [
          '文件上传-pjh',
        ],
        summary: 'beforeuploadNone',
        operationId: 'beforeuploadNoneUsingPUT',
        consumes: [
          'application/json',
        ],
        produces: [
          'application/json;charset=UTF-8',
        ],
        parameters: [
          {
            name: 'fileName',
            in: 'query',
            description: 'fileName',
            required: false,
            type: 'string',
          },
          {
            name: 'lastmodtime',
            in: 'query',
            description: 'lastmodtime',
            required: false,
            type: 'string',
          },
          {
            name: 'resourceType',
            in: 'query',
            description: 'resourceType',
            required: false,
            type: 'integer',
            format: 'int32',
          },
          {
            name: 'totalsize',
            in: 'query',
            description: 'totalsize',
            required: false,
            type: 'integer',
            format: 'int64',
          },
          {
            name: 'uid',
            in: 'query',
            description: 'uid',
            required: false,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'object',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
      delete: {
        tags: [
          '文件上传-pjh',
        ],
        summary: 'beforeuploadNone',
        operationId: 'beforeuploadNoneUsingDELETE',
        produces: [
          'application/json;charset=UTF-8',
        ],
        parameters: [
          {
            name: 'fileName',
            in: 'query',
            description: 'fileName',
            required: false,
            type: 'string',
          },
          {
            name: 'lastmodtime',
            in: 'query',
            description: 'lastmodtime',
            required: false,
            type: 'string',
          },
          {
            name: 'resourceType',
            in: 'query',
            description: 'resourceType',
            required: false,
            type: 'integer',
            format: 'int32',
          },
          {
            name: 'totalsize',
            in: 'query',
            description: 'totalsize',
            required: false,
            type: 'integer',
            format: 'int64',
          },
          {
            name: 'uid',
            in: 'query',
            description: 'uid',
            required: false,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'object',
            },
          },
          204: {
            description: 'No Content',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
        },
        deprecated: false,
      },
      options: {
        tags: [
          '文件上传-pjh',
        ],
        summary: 'beforeuploadNone',
        operationId: 'beforeuploadNoneUsingOPTIONS',
        consumes: [
          'application/json',
        ],
        produces: [
          'application/json;charset=UTF-8',
        ],
        parameters: [
          {
            name: 'fileName',
            in: 'query',
            description: 'fileName',
            required: false,
            type: 'string',
          },
          {
            name: 'lastmodtime',
            in: 'query',
            description: 'lastmodtime',
            required: false,
            type: 'string',
          },
          {
            name: 'resourceType',
            in: 'query',
            description: 'resourceType',
            required: false,
            type: 'integer',
            format: 'int32',
          },
          {
            name: 'totalsize',
            in: 'query',
            description: 'totalsize',
            required: false,
            type: 'integer',
            format: 'int64',
          },
          {
            name: 'uid',
            in: 'query',
            description: 'uid',
            required: false,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'object',
            },
          },
          204: {
            description: 'No Content',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
        },
        deprecated: false,
      },
      patch: {
        tags: [
          '文件上传-pjh',
        ],
        summary: 'beforeuploadNone',
        operationId: 'beforeuploadNoneUsingPATCH',
        consumes: [
          'application/json',
        ],
        produces: [
          'application/json;charset=UTF-8',
        ],
        parameters: [
          {
            name: 'fileName',
            in: 'query',
            description: 'fileName',
            required: false,
            type: 'string',
          },
          {
            name: 'lastmodtime',
            in: 'query',
            description: 'lastmodtime',
            required: false,
            type: 'string',
          },
          {
            name: 'resourceType',
            in: 'query',
            description: 'resourceType',
            required: false,
            type: 'integer',
            format: 'int32',
          },
          {
            name: 'totalsize',
            in: 'query',
            description: 'totalsize',
            required: false,
            type: 'integer',
            format: 'int64',
          },
          {
            name: 'uid',
            in: 'query',
            description: 'uid',
            required: false,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'object',
            },
          },
          204: {
            description: 'No Content',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
        },
        deprecated: false,
      },
    },
    '/fileupload/getPartNumber': {
      get: {
        tags: [
          '文件上传-pjh',
        ],
        summary: 'getPartNumber',
        operationId: 'getPartNumberUsingGET',
        produces: [
          'application/json;charset=UTF-8',
        ],
        parameters: [
          {
            name: 'fileName',
            in: 'query',
            description: 'fileName',
            required: false,
            type: 'string',
          },
          {
            name: 'resourceType',
            in: 'query',
            description: 'resourceType',
            required: false,
            type: 'integer',
            format: 'int32',
          },
          {
            name: 'totalsize',
            in: 'query',
            description: 'totalsize',
            required: false,
            type: 'integer',
            format: 'int64',
          },
          {
            name: 'uid',
            in: 'query',
            description: 'uid',
            required: false,
            type: 'string',
            default: '0',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'object',
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/fileupload/getUploadAuth': {
      get: {
        tags: [
          '文件上传-pjh',
        ],
        summary: 'getUploadAuth',
        operationId: 'getUploadAuthUsingGET',
        produces: [
          'application/json;charset=UTF-8',
        ],
        parameters: [
          {
            name: 'fileName',
            in: 'query',
            description: 'fileName',
            required: false,
            type: 'string',
          },
          {
            name: 'flashAttributes',
            in: 'query',
            required: false,
            type: 'object',
          },
          {
            name: 'lastmodtime',
            in: 'query',
            description: 'lastmodtime',
            required: false,
            type: 'string',
          },
          {
            name: 'resourceType',
            in: 'query',
            description: 'resourceType',
            required: false,
            type: 'integer',
            format: 'int32',
          },
          {
            name: 'totalsize',
            in: 'query',
            description: 'totalsize',
            required: false,
            type: 'integer',
            format: 'int64',
          },
          {
            name: 'uid',
            in: 'query',
            description: 'uid',
            required: false,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'object',
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/fileupload/getVideoPlayUrl': {
      get: {
        tags: [
          '文件上传-pjh',
        ],
        summary: 'getVideoPlayUrl',
        operationId: 'getVideoPlayUrlUsingGET',
        produces: [
          'application/json;charset=UTF-8',
        ],
        parameters: [
          {
            name: 'fileName',
            in: 'query',
            description: 'fileName',
            required: false,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'object',
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/fileupload/saveupload': {
      get: {
        tags: [
          '文件上传-pjh',
        ],
        summary: 'saveUpload',
        operationId: 'saveUploadUsingGET',
        produces: [
          'application/json;charset=UTF-8',
        ],
        parameters: [
          {
            name: 'filename',
            in: 'query',
            description: 'filename',
            required: false,
            type: 'string',
          },
          {
            name: 'flashAttributes',
            in: 'query',
            required: false,
            type: 'object',
          },
          {
            name: 'lastmodtime',
            in: 'query',
            description: 'lastmodtime',
            required: false,
            type: 'string',
          },
          {
            name: 'oriFileName',
            in: 'query',
            description: 'oriFileName',
            required: false,
            type: 'string',
          },
          {
            name: 'totalsize',
            in: 'query',
            description: 'totalsize',
            required: false,
            type: 'integer',
            format: 'int32',
          },
          {
            name: 'uploadid',
            in: 'query',
            description: 'uploadid',
            required: false,
            type: 'string',
          },
          {
            name: 'zone',
            in: 'query',
            description: 'zone',
            required: false,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'object',
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/fileupload/simpleFileUpload': {
      post: {
        tags: [
          '文件上传-pjh',
        ],
        summary: '单个文件上传 通过flash/H5控件上传,走小文件上传',
        operationId: 'simpleFileUploadUsingPOST',
        consumes: [
          'multipart/form-data',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'file',
            description: '上传的文件',
            required: true,
            schema: {
              $ref: '#/definitions/MultipartFile',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'object',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/fileupload/uploadComplete': {
      get: {
        tags: [
          '文件上传-pjh',
        ],
        summary: 'uploadCompleteNone',
        operationId: 'uploadCompleteNoneUsingGET',
        produces: [
          'application/json;charset=UTF-8',
        ],
        parameters: [
          {
            name: 'fileName',
            in: 'query',
            description: 'fileName',
            required: false,
            type: 'string',
          },
          {
            name: 'oriFileName',
            in: 'query',
            description: 'oriFileName',
            required: false,
            type: 'string',
          },
          {
            name: 'partNum',
            in: 'query',
            description: 'partNum',
            required: false,
            type: 'string',
          },
          {
            name: 'repeate',
            in: 'query',
            description: 'repeate',
            required: false,
            type: 'integer',
            format: 'int32',
          },
          {
            name: 'uploadId',
            in: 'query',
            description: 'uploadId',
            required: false,
            type: 'string',
          },
          {
            name: 'zoneId',
            in: 'query',
            description: 'zoneId',
            required: false,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'object',
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/fileupload/uploadOssAuth': {
      get: {
        tags: [
          '文件上传-pjh',
        ],
        summary: '获取Ali云Oss Token',
        operationId: 'getAliOssTokenUsingGET',
        produces: [
          'application/json;charset=UTF-8',
        ],
        parameters: [
          {
            name: 'busiType',
            in: 'query',
            description: '请求bucket类型',
            required: false,
            type: 'string',
          },
          {
            name: 'fileName',
            in: 'query',
            description: '文件名称',
            required: false,
            type: 'string',
          },
          {
            name: 'uid',
            in: 'query',
            description: 'uid，与手机号不能同时为空',
            required: false,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/阿里云 OSS Token 凭证',
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/getauthorizedurl': {
      get: {
        tags: [
          'login-controller',
        ],
        summary: 'getAuthorizedUrl',
        operationId: 'getAuthorizedUrlUsingGET',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'redirectUrl',
            in: 'query',
            description: 'redirectUrl',
            required: false,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'object',
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
      head: {
        tags: [
          'login-controller',
        ],
        summary: 'getAuthorizedUrl',
        operationId: 'getAuthorizedUrlUsingHEAD',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'redirectUrl',
            in: 'query',
            description: 'redirectUrl',
            required: false,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'object',
            },
          },
          204: {
            description: 'No Content',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
        },
        deprecated: false,
      },
      post: {
        tags: [
          'login-controller',
        ],
        summary: 'getAuthorizedUrl',
        operationId: 'getAuthorizedUrlUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'redirectUrl',
            in: 'query',
            description: 'redirectUrl',
            required: false,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'object',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
      put: {
        tags: [
          'login-controller',
        ],
        summary: 'getAuthorizedUrl',
        operationId: 'getAuthorizedUrlUsingPUT',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'redirectUrl',
            in: 'query',
            description: 'redirectUrl',
            required: false,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'object',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
      delete: {
        tags: [
          'login-controller',
        ],
        summary: 'getAuthorizedUrl',
        operationId: 'getAuthorizedUrlUsingDELETE',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'redirectUrl',
            in: 'query',
            description: 'redirectUrl',
            required: false,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'object',
            },
          },
          204: {
            description: 'No Content',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
        },
        deprecated: false,
      },
      options: {
        tags: [
          'login-controller',
        ],
        summary: 'getAuthorizedUrl',
        operationId: 'getAuthorizedUrlUsingOPTIONS',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'redirectUrl',
            in: 'query',
            description: 'redirectUrl',
            required: false,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'object',
            },
          },
          204: {
            description: 'No Content',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
        },
        deprecated: false,
      },
      patch: {
        tags: [
          'login-controller',
        ],
        summary: 'getAuthorizedUrl',
        operationId: 'getAuthorizedUrlUsingPATCH',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'redirectUrl',
            in: 'query',
            description: 'redirectUrl',
            required: false,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'object',
            },
          },
          204: {
            description: 'No Content',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
        },
        deprecated: false,
      },
    },
    '/goods/add': {
      post: {
        tags: [
          '商品-hlh',
        ],
        summary: '新增商品',
        operationId: 'addUsingPOST_7',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'goodsAddReq',
            description: 'goodsAddReq',
            required: true,
            schema: {
              $ref: '#/definitions/GoodsAddReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/商品 model',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/goods/audit/{id}': {
      put: {
        tags: [
          '商品-hlh',
        ],
        summary: '审核商品',
        operationId: 'auditUsingPUT',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'approveReq',
            description: 'approveReq',
            required: true,
            schema: {
              $ref: '#/definitions/GoodsApproveReq',
            },
          },
          {
            name: 'id',
            in: 'path',
            description: '商品id',
            required: true,
            type: 'integer',
            minimum: 1.0,
            exclusiveMinimum: false,
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/AuditRes',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/goods/get/{id}': {
      get: {
        tags: [
          '商品-hlh',
        ],
        summary: '根据id查询商品详情',
        operationId: 'getWithProductInfoByIdUsingGET',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'id',
            required: true,
            type: 'integer',
            minimum: 1.0,
            exclusiveMinimum: false,
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/商品 model',
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/goods/list': {
      post: {
        tags: [
          '商品-hlh',
        ],
        summary: '商品列表，学生中心用',
        operationId: 'listUsingPOST_4',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'goodsCommonReq',
            description: 'goodsCommonReq',
            required: true,
            schema: {
              $ref: '#/definitions/商品简单查询参数，学生中心用',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/商品 model',
              },
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/goods/offline/{id}': {
      put: {
        tags: [
          '商品-hlh',
        ],
        summary: '下线商品',
        operationId: 'offlineUsingPUT_1',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: '商品ID',
            required: true,
            type: 'integer',
            minimum: 1.0,
            exclusiveMinimum: false,
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/OfflineRes',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/goods/pageWithProductInfoByParam': {
      post: {
        tags: [
          '商品-hlh',
        ],
        summary: '根据条件分页查询商品列表，商品包含产品信息',
        operationId: 'pageWithProductInfoByParamUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'goodsReq',
            description: 'goodsReq',
            required: true,
            schema: {
              $ref: '#/definitions/商品查询参数',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/Page«商品 model»',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/goods/update/{id}': {
      put: {
        tags: [
          '商品-hlh',
        ],
        summary: '更新商品',
        operationId: 'updateUsingPUT_5',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'goodsAddReq',
            description: 'goodsAddReq',
            required: true,
            schema: {
              $ref: '#/definitions/GoodsAddReq',
            },
          },
          {
            name: 'id',
            in: 'path',
            description: '商品id',
            required: true,
            type: 'integer',
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/商品 model',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/goodsPublish/add': {
      post: {
        tags: [
          '商品发布',
        ],
        summary: '发布商品页明细',
        operationId: 'addUsingPOST_8',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'goodsPageInfoAddReq',
            description: 'goodsPageInfoAddReq',
            required: true,
            schema: {
              $ref: '#/definitions/GoodsPageInfoAddReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'integer',
              format: 'int64',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/goodsPublish/get/{id}': {
      get: {
        tags: [
          '商品发布',
        ],
        summary: '获取发布商品页明细',
        operationId: 'getPageInfoUsingGET',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'id',
            required: true,
            type: 'integer',
            minimum: 1.0,
            exclusiveMinimum: false,
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/GoodsPageInfoRes',
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/goodsPublish/offline/{pageId}': {
      put: {
        tags: [
          '商品发布',
        ],
        summary: '下线商品页',
        operationId: 'offlineUsingPUT_2',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'pageId',
            in: 'path',
            description: '商品页ID',
            required: true,
            type: 'integer',
            minimum: 1.0,
            exclusiveMinimum: false,
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'integer',
              format: 'int64',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/goodsPublish/page': {
      post: {
        tags: [
          '商品发布',
        ],
        summary: '分页获取发布商品列表',
        operationId: 'pageUsingPOST_3',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'goodsPageInfoReq',
            description: 'goodsPageInfoReq',
            required: true,
            schema: {
              $ref: '#/definitions/GoodsPageInfoReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/Page«GoodsPageInfoRes»',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/goodsPublish/update/{pageId}': {
      put: {
        tags: [
          '商品发布',
        ],
        summary: '更新商品页明细',
        operationId: 'updateUsingPUT_6',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'goodsPageInfoAddReq',
            description: 'goodsPageInfoAddReq',
            required: true,
            schema: {
              $ref: '#/definitions/GoodsPageInfoAddReq',
            },
          },
          {
            name: 'pageId',
            in: 'path',
            description: '商品pageId',
            required: true,
            type: 'integer',
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/GoodsPageInfoRes',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/grindEars/getByChapterId/{chapterId}': {
      get: {
        tags: [
          '磨耳朵-ygy',
        ],
        summary: '根据章节id获取磨耳朵详情',
        operationId: 'getByChapterIdUsingGET',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'chapterId',
            in: 'path',
            description: '章节ID',
            required: true,
            type: 'integer',
            minimum: 1.0,
            exclusiveMinimum: false,
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/BooleanRes«磨耳朵详情 model»',
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/grindEars/page': {
      post: {
        tags: [
          '磨耳朵-ygy',
        ],
        summary: '磨耳朵分页列表',
        operationId: 'pageUsingPOST_4',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'req',
            description: 'req',
            required: true,
            schema: {
              $ref: '#/definitions/磨耳朵分页列表请求model',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/Page«磨耳朵分页列表响应 model»',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/grindEars/pageMediaStudy': {
      post: {
        tags: [
          '磨耳朵-ygy',
        ],
        summary: '学习记录分页列表',
        operationId: 'pageLearnRecordUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'req',
            description: 'req',
            required: true,
            schema: {
              $ref: '#/definitions/音视频学习记录分页列表请求model',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/Page«音视频学习记录分页列表响应 model»',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/grindEars/save': {
      post: {
        tags: [
          '磨耳朵-ygy',
        ],
        summary: '保存磨耳朵,包括新增、修改',
        operationId: 'saveUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'grindEarsSaveReq',
            description: 'grindEarsSaveReq',
            required: true,
            schema: {
              $ref: '#/definitions/磨耳朵保存 model',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/BooleanRes«long»',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/home/callBack': {
      get: {
        tags: [
          'login-controller',
        ],
        summary: 'callBack',
        operationId: 'callBackUsingGET_1',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'redirectUrl',
            in: 'query',
            description: 'redirectUrl',
            required: false,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
      head: {
        tags: [
          'login-controller',
        ],
        summary: 'callBack',
        operationId: 'callBackUsingHEAD_1',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'redirectUrl',
            in: 'query',
            description: 'redirectUrl',
            required: false,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
          },
          204: {
            description: 'No Content',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
        },
        deprecated: false,
      },
      post: {
        tags: [
          'login-controller',
        ],
        summary: 'callBack',
        operationId: 'callBackUsingPOST_1',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'redirectUrl',
            in: 'query',
            description: 'redirectUrl',
            required: false,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
      put: {
        tags: [
          'login-controller',
        ],
        summary: 'callBack',
        operationId: 'callBackUsingPUT_1',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'redirectUrl',
            in: 'query',
            description: 'redirectUrl',
            required: false,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
      delete: {
        tags: [
          'login-controller',
        ],
        summary: 'callBack',
        operationId: 'callBackUsingDELETE_1',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'redirectUrl',
            in: 'query',
            description: 'redirectUrl',
            required: false,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
          },
          204: {
            description: 'No Content',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
        },
        deprecated: false,
      },
      options: {
        tags: [
          'login-controller',
        ],
        summary: 'callBack',
        operationId: 'callBackUsingOPTIONS_1',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'redirectUrl',
            in: 'query',
            description: 'redirectUrl',
            required: false,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
          },
          204: {
            description: 'No Content',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
        },
        deprecated: false,
      },
      patch: {
        tags: [
          'login-controller',
        ],
        summary: 'callBack',
        operationId: 'callBackUsingPATCH_1',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'redirectUrl',
            in: 'query',
            description: 'redirectUrl',
            required: false,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
          },
          204: {
            description: 'No Content',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
        },
        deprecated: false,
      },
    },
    '/home/denycallback': {
      get: {
        tags: [
          'login-controller',
        ],
        summary: 'denycallback',
        operationId: 'denycallbackUsingGET_1',
        produces: [
          '*/*',
        ],
        responses: {
          200: {
            description: 'OK',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
      head: {
        tags: [
          'login-controller',
        ],
        summary: 'denycallback',
        operationId: 'denycallbackUsingHEAD_1',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        responses: {
          200: {
            description: 'OK',
          },
          204: {
            description: 'No Content',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
        },
        deprecated: false,
      },
      post: {
        tags: [
          'login-controller',
        ],
        summary: 'denycallback',
        operationId: 'denycallbackUsingPOST_1',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        responses: {
          200: {
            description: 'OK',
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
      put: {
        tags: [
          'login-controller',
        ],
        summary: 'denycallback',
        operationId: 'denycallbackUsingPUT_1',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        responses: {
          200: {
            description: 'OK',
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
      delete: {
        tags: [
          'login-controller',
        ],
        summary: 'denycallback',
        operationId: 'denycallbackUsingDELETE_1',
        produces: [
          '*/*',
        ],
        responses: {
          200: {
            description: 'OK',
          },
          204: {
            description: 'No Content',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
        },
        deprecated: false,
      },
      options: {
        tags: [
          'login-controller',
        ],
        summary: 'denycallback',
        operationId: 'denycallbackUsingOPTIONS_1',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        responses: {
          200: {
            description: 'OK',
          },
          204: {
            description: 'No Content',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
        },
        deprecated: false,
      },
      patch: {
        tags: [
          'login-controller',
        ],
        summary: 'denycallback',
        operationId: 'denycallbackUsingPATCH_1',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        responses: {
          200: {
            description: 'OK',
          },
          204: {
            description: 'No Content',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
        },
        deprecated: false,
      },
    },
    '/home/getauthorizedurl': {
      get: {
        tags: [
          'login-controller',
        ],
        summary: 'getAuthorizedUrl',
        operationId: 'getAuthorizedUrlUsingGET_1',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'redirectUrl',
            in: 'query',
            description: 'redirectUrl',
            required: false,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'object',
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
      head: {
        tags: [
          'login-controller',
        ],
        summary: 'getAuthorizedUrl',
        operationId: 'getAuthorizedUrlUsingHEAD_1',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'redirectUrl',
            in: 'query',
            description: 'redirectUrl',
            required: false,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'object',
            },
          },
          204: {
            description: 'No Content',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
        },
        deprecated: false,
      },
      post: {
        tags: [
          'login-controller',
        ],
        summary: 'getAuthorizedUrl',
        operationId: 'getAuthorizedUrlUsingPOST_1',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'redirectUrl',
            in: 'query',
            description: 'redirectUrl',
            required: false,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'object',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
      put: {
        tags: [
          'login-controller',
        ],
        summary: 'getAuthorizedUrl',
        operationId: 'getAuthorizedUrlUsingPUT_1',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'redirectUrl',
            in: 'query',
            description: 'redirectUrl',
            required: false,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'object',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
      delete: {
        tags: [
          'login-controller',
        ],
        summary: 'getAuthorizedUrl',
        operationId: 'getAuthorizedUrlUsingDELETE_1',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'redirectUrl',
            in: 'query',
            description: 'redirectUrl',
            required: false,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'object',
            },
          },
          204: {
            description: 'No Content',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
        },
        deprecated: false,
      },
      options: {
        tags: [
          'login-controller',
        ],
        summary: 'getAuthorizedUrl',
        operationId: 'getAuthorizedUrlUsingOPTIONS_1',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'redirectUrl',
            in: 'query',
            description: 'redirectUrl',
            required: false,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'object',
            },
          },
          204: {
            description: 'No Content',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
        },
        deprecated: false,
      },
      patch: {
        tags: [
          'login-controller',
        ],
        summary: 'getAuthorizedUrl',
        operationId: 'getAuthorizedUrlUsingPATCH_1',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'redirectUrl',
            in: 'query',
            description: 'redirectUrl',
            required: false,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'object',
            },
          },
          204: {
            description: 'No Content',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
        },
        deprecated: false,
      },
    },
    '/knowledge/add': {
      post: {
        tags: [
          '内容库-pjh',
        ],
        summary: '新增知识点',
        operationId: 'addUsingPOST_9',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'param',
            description: 'param',
            required: true,
            schema: {
              $ref: '#/definitions/KnowledgeAddReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/KnowledgeAddRes',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/knowledge/category/add': {
      post: {
        tags: [
          '内容库-pjh',
        ],
        summary: '新增分类',
        operationId: 'addCategoryUsingPOST_1',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'param',
            description: 'param',
            required: true,
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/内容库分类新增 model',
              },
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/内容库分类 model',
              },
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/knowledge/category/list': {
      post: {
        tags: [
          '内容库-pjh',
        ],
        summary: '获取分类列表',
        description: '状态字典为 knowledgeStatus',
        operationId: 'pageCategoryUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'param',
            description: '分类查询对象',
            required: true,
            schema: {
              $ref: '#/definitions/KnowledgeCategoryReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/Page«内容库分类 model»',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/knowledge/category/listAll': {
      get: {
        tags: [
          '内容库-pjh',
        ],
        summary: '获取所有分类',
        description: '状态字典为 knowledgeStatus',
        operationId: 'listAllCategoryUsingGET',
        produces: [
          '*/*',
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/内容库分类 model',
              },
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/knowledge/category/update': {
      put: {
        tags: [
          '内容库-pjh',
        ],
        summary: '更新分类',
        operationId: 'updateCategoryUsingPUT',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'req',
            description: 'req',
            required: true,
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/内容库分类新增 model',
              },
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/内容库分类 model',
              },
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/knowledge/category/{id}': {
      get: {
        tags: [
          '内容库-pjh',
        ],
        summary: '获取分类详情',
        description: '状态字典为 knowledgeStatus',
        operationId: 'getCategoryUsingGET',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: '分类id',
            required: true,
            type: 'integer',
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/内容库分类 model',
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/knowledge/chunk/add': {
      post: {
        tags: [
          '内容库-pjh',
        ],
        summary: '新增词块',
        operationId: 'addChunkUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'param',
            description: 'param',
            required: true,
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/知识点内容新增 model',
              },
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/知识点内容 model',
              },
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/knowledge/chunk/list': {
      post: {
        tags: [
          '内容库-pjh',
        ],
        summary: '获取词块列表',
        operationId: 'pageChunkUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'req',
            description: '词块查询对象',
            required: true,
            schema: {
              $ref: '#/definitions/TbKnowledgeContentReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/Page«知识点内容 model»',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/knowledge/chunk/update': {
      put: {
        tags: [
          '内容库-pjh',
        ],
        summary: '更新词块',
        operationId: 'updateChunkUsingPUT',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'param',
            description: 'param',
            required: true,
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/知识点内容更新 model',
              },
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/知识点内容 model',
              },
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/knowledge/chunk/{id}': {
      get: {
        tags: [
          '内容库-pjh',
        ],
        summary: '获取词块详情',
        operationId: 'getChunkUsingGET',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: '词块id',
            required: true,
            type: 'integer',
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/知识点内容 model',
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/knowledge/get/{id}': {
      get: {
        tags: [
          '内容库-pjh',
        ],
        summary: '获取知识点详情',
        operationId: 'getUsingGET_2',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'id',
            required: true,
            type: 'integer',
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/KnowledgeRes',
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/knowledge/page': {
      post: {
        tags: [
          '内容库-pjh',
        ],
        summary: '获取知识点列表',
        operationId: 'pageUsingPOST_5',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'param',
            description: 'param',
            required: true,
            schema: {
              $ref: '#/definitions/KnowledgePageReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/Page«KnowledgeRes»',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/knowledge/sentences/add': {
      post: {
        tags: [
          '内容库-pjh',
        ],
        summary: '新增句子',
        operationId: 'addSentencesUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'param',
            description: 'param',
            required: true,
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/知识点内容新增 model',
              },
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/知识点内容 model',
              },
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/knowledge/sentences/list': {
      post: {
        tags: [
          '内容库-pjh',
        ],
        summary: '获取句子列表',
        operationId: 'pageSentencesUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'req',
            description: '句子查询对象',
            required: true,
            schema: {
              $ref: '#/definitions/TbKnowledgeContentReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/Page«知识点内容 model»',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/knowledge/sentences/update': {
      put: {
        tags: [
          '内容库-pjh',
        ],
        summary: '更新句子',
        operationId: 'updateSentencesUsingPUT',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'param',
            description: 'param',
            required: true,
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/知识点内容更新 model',
              },
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/知识点内容 model',
              },
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/knowledge/sentences/{id}': {
      get: {
        tags: [
          '内容库-pjh',
        ],
        summary: '获取句子详情',
        operationId: 'getSentencesUsingGET',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: '句子id',
            required: true,
            type: 'integer',
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/知识点内容 model',
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/knowledge/tags/add': {
      post: {
        tags: [
          '内容库-pjh',
        ],
        summary: '新增标签',
        description: '状态字典为 knowledgeStatus，分类为其parentId',
        operationId: 'addTagsUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'param',
            description: 'param',
            required: true,
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/内容库新增 model',
              },
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/内容库分类 model',
              },
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/knowledge/tags/list': {
      post: {
        tags: [
          '内容库-pjh',
        ],
        summary: '获取标签列表',
        description: '状态字典为 knowledgeStatus',
        operationId: 'pageTagsUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'param',
            description: '分类查询对象',
            required: true,
            schema: {
              $ref: '#/definitions/KnowledgeCategoryReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/Page«内容库分类 model»',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/knowledge/tags/update': {
      put: {
        tags: [
          '内容库-pjh',
        ],
        summary: '更新标签',
        description: '状态字典为 knowledgeStatus，分类为其parentId',
        operationId: 'updateTagsUsingPUT',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'param',
            description: 'param',
            required: true,
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/内容库分类新增 model',
              },
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/内容库分类 model',
              },
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/knowledge/tags/{id}': {
      get: {
        tags: [
          '内容库-pjh',
        ],
        summary: '获取标签详情',
        description: '状态字典为 knowledgeStatus，分类为其parent，结构相同',
        operationId: 'getTagsUsingGET',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: '标签id',
            required: true,
            type: 'integer',
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/内容库分类 model',
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/knowledge/update': {
      put: {
        tags: [
          '内容库-pjh',
        ],
        summary: '更新知识点',
        operationId: 'updateUsingPUT_7',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'param',
            description: 'param',
            required: true,
            schema: {
              $ref: '#/definitions/KnowledgeUpdateReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/KnowledgeUpdateRes',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/knowledge/updateStatus': {
      put: {
        tags: [
          '内容库-pjh',
        ],
        summary: '更新知识状态',
        operationId: 'updateStatusUsingPUT',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'knowledgeUpdateStatusReq',
            description: 'knowledgeUpdateStatusReq',
            required: true,
            schema: {
              $ref: '#/definitions/KnowledgeUpdateStatusReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/BooleanRes',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/knowledge/words/add': {
      post: {
        tags: [
          '内容库-pjh',
        ],
        summary: '新增单词',
        operationId: 'addWordsUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'param',
            description: 'param',
            required: true,
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/知识点内容新增 model',
              },
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/知识点内容 model',
              },
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/knowledge/words/list': {
      post: {
        tags: [
          '内容库-pjh',
        ],
        summary: '获取单词列表',
        operationId: 'pageWordsUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'param',
            description: '单词查询对象',
            required: true,
            schema: {
              $ref: '#/definitions/TbKnowledgeContentReq',
            },
          },
          {
            in: 'body',
            name: 'req',
            description: 'req',
            required: true,
            schema: {
              $ref: '#/definitions/知识点内容查询 model',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/Page«知识点内容 model»',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/knowledge/words/update': {
      put: {
        tags: [
          '内容库-pjh',
        ],
        summary: '更新单词',
        operationId: 'updateWordsUsingPUT',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'param',
            description: 'param',
            required: true,
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/知识点内容更新 model',
              },
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/知识点内容 model',
              },
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/knowledge/words/{id}': {
      get: {
        tags: [
          '内容库-pjh',
        ],
        summary: '获取单词详情',
        operationId: 'getWordsUsingGET',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: '单词id',
            required: true,
            type: 'integer',
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/知识点内容 model',
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/landingpage/add': {
      post: {
        tags: [
          '落地页',
        ],
        summary: '新增落地页',
        operationId: 'addUsingPOST_10',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'param',
            description: 'param',
            required: true,
            schema: {
              $ref: '#/definitions/LandingPageAddReq model',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'integer',
              format: 'int64',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
      put: {
        tags: [
          '落地页',
        ],
        summary: '新增落地页',
        operationId: 'addUsingPUT',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'param',
            description: 'param',
            required: true,
            schema: {
              $ref: '#/definitions/LandingPageAddReq model',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'integer',
              format: 'int64',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/landingpage/getEditVersion': {
      post: {
        tags: [
          '落地页',
        ],
        summary: '获取修改前落地页',
        operationId: 'getEditVersionUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'param',
            description: 'param',
            required: true,
            schema: {
              $ref: '#/definitions/LandingPageGetEVReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/LandingPageEVRes',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
      put: {
        tags: [
          '落地页',
        ],
        summary: '获取修改前落地页',
        operationId: 'getEditVersionUsingPUT',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'param',
            description: 'param',
            required: true,
            schema: {
              $ref: '#/definitions/LandingPageGetEVReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/LandingPageEVRes',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/landingpage/offline': {
      post: {
        tags: [
          '落地页',
        ],
        summary: '下线落地页',
        operationId: 'offlineUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'param',
            description: 'param',
            required: true,
            schema: {
              $ref: '#/definitions/LandingPageOfflineReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/BooleanRes',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
      put: {
        tags: [
          '落地页',
        ],
        summary: '下线落地页',
        operationId: 'offlineUsingPUT_3',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'param',
            description: 'param',
            required: true,
            schema: {
              $ref: '#/definitions/LandingPageOfflineReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/BooleanRes',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/landingpage/page': {
      post: {
        tags: [
          '落地页',
        ],
        summary: '获取落地页分页列表',
        description: '状态字典为 landingpageStatus',
        operationId: 'pageUsingPOST_6',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'param',
            description: 'param',
            required: true,
            schema: {
              $ref: '#/definitions/LandingPageQueryReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/Page«LandingPageRes»',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/landingpage/publish': {
      post: {
        tags: [
          '落地页',
        ],
        summary: '发布落地页',
        operationId: 'publishUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'param',
            description: 'param',
            required: true,
            schema: {
              $ref: '#/definitions/LandingPagePublishReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/BooleanRes',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
      put: {
        tags: [
          '落地页',
        ],
        summary: '发布落地页',
        operationId: 'publishUsingPUT',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'param',
            description: 'param',
            required: true,
            schema: {
              $ref: '#/definitions/LandingPagePublishReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/BooleanRes',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/landingpage/update': {
      post: {
        tags: [
          '落地页',
        ],
        summary: '更新落地页',
        operationId: 'updateUsingPOST_1',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'param',
            description: 'param',
            required: true,
            schema: {
              $ref: '#/definitions/LandingPageUpdateReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'integer',
              format: 'int64',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
      put: {
        tags: [
          '落地页',
        ],
        summary: '更新落地页',
        operationId: 'updateUsingPUT_8',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'param',
            description: 'param',
            required: true,
            schema: {
              $ref: '#/definitions/LandingPageUpdateReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'integer',
              format: 'int64',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/lesson/get/{id}': {
      get: {
        tags: [
          '课节-sjw',
        ],
        summary: '根据ID获取课节信息',
        operationId: 'getUsingGET_4',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'id',
            required: true,
            type: 'integer',
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/学生课节实例model',
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/lesson/getBuyedCourseInfo/{uid}': {
      get: {
        tags: [
          '课节-sjw',
        ],
        summary: '已购买课程列表',
        operationId: 'pageBuyedCourseByUidUsingGET',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'pageNo',
            in: 'query',
            description: '页码',
            required: true,
            type: 'integer',
            minimum: 1.0,
            exclusiveMinimum: false,
            format: 'int32',
          },
          {
            name: 'pageSize',
            in: 'query',
            description: '页数',
            required: true,
            type: 'integer',
            minimum: 1.0,
            exclusiveMinimum: false,
            format: 'int32',
          },
          {
            name: 'uid',
            in: 'path',
            description: '学生uid',
            required: true,
            type: 'integer',
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/Page«BuyedCourseInfoRes»',
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/lesson/getCurrentLiveType/{sid}': {
      get: {
        tags: [
          '课节-sjw',
        ],
        summary: '获取当前sid的直播类型',
        operationId: 'getCurrentLiveTypeUsingGET',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'sid',
            in: 'path',
            description: 'sid',
            required: true,
            type: 'integer',
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/当前sid的liveType',
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/lesson/lessonArrangementStatistics': {
      get: {
        tags: [
          '课节-sjw',
        ],
        summary: '根据时间范围查询未匹配老师的课节数量',
        operationId: 'lessonArrangementStatisticsUsingGET',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'startTimeFrom',
            in: 'query',
            description: '查询时间开始',
            required: true,
            type: 'integer',
            format: 'int64',
          },
          {
            name: 'startTimeTo',
            in: 'query',
            description: '查询时间结束',
            required: true,
            type: 'integer',
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'object',
              additionalProperties: {
                type: 'integer',
                format: 'int32',
              },
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/lesson/listConvertibleCourse': {
      get: {
        tags: [
          '课节-sjw',
        ],
        summary: '获取课程可开课程列表',
        operationId: 'listConvertibleCourseUsingGET',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'courseId',
            in: 'query',
            description: '课程ID',
            required: true,
            type: 'integer',
            minimum: 1.0,
            exclusiveMinimum: false,
            format: 'int64',
          },
          {
            name: 'goodsId',
            in: 'query',
            description: '商品ID',
            required: true,
            type: 'integer',
            minimum: 1.0,
            exclusiveMinimum: false,
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/可开课程 model',
              },
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/lesson/listEndLesson/{lessonId}': {
      get: {
        tags: [
          '课节-sjw',
        ],
        summary: '根据课节ID获取学生所有已完成课节',
        operationId: 'listEndLessonUsingGET',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'lessonId',
            in: 'path',
            description: 'lessonId',
            required: true,
            type: 'integer',
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/学生已完成课节 model',
              },
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/lesson/listShareCourse': {
      post: {
        tags: [
          '课节-sjw',
        ],
        summary: '获取指定课程，共享课程列表',
        description: '可选择是否包括指定课程自身',
        operationId: 'listShareCourseUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'shareCourseParam',
            description: '共享课程查询model',
            required: true,
            schema: {
              $ref: '#/definitions/ShareCourseReq',
            },
          },
          {
            in: 'body',
            name: 'shareCourseReq',
            description: 'shareCourseReq',
            required: true,
            schema: {
              $ref: '#/definitions/共享课程请求model',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/ShareCourseRes',
              },
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/lesson/listStuLessonArrangement': {
      post: {
        tags: [
          '课节-sjw',
        ],
        summary: '获取学生课程表',
        operationId: 'pageStuLessonArrangementUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'studentLessonReq',
            description: 'studentLessonReq',
            required: true,
            schema: {
              $ref: '#/definitions/查询学生课节 model',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/Page«学生课节实例model»',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/lesson/listUnarrangedLesson': {
      get: {
        tags: [
          '课节-sjw',
        ],
        summary: '根据时间查询未匹配老师的课节列表',
        operationId: 'listUnAssignTeacherLessonsUsingGET',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'startTime',
            in: 'query',
            description: '查询时间',
            required: true,
            type: 'integer',
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/学生课节实例model',
              },
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/lesson/pageAbnormal': {
      post: {
        tags: [
          '课节-sjw',
        ],
        summary: '获取异常课节',
        operationId: 'pageAbnormalUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'abnormalLessonReq',
            description: 'abnormalLessonReq',
            required: true,
            schema: {
              $ref: '#/definitions/AbnormalLessonReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/Page«学生课节实例model»',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/lesson/pageHippoEndLesson': {
      post: {
        tags: [
          '课节-sjw',
        ],
        summary: '分页获取已完成课节',
        description: '工单系统查询平台课节',
        operationId: 'pageHippoEndLessonUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'createBeginDate',
            in: 'query',
            required: false,
            type: 'string',
            format: 'date-time',
          },
          {
            name: 'createBy',
            in: 'query',
            required: false,
            type: 'integer',
            format: 'int64',
          },
          {
            name: 'createEndDate',
            in: 'query',
            required: false,
            type: 'string',
            format: 'date-time',
          },
          {
            name: 'id',
            in: 'query',
            required: false,
            type: 'integer',
            format: 'int64',
          },
          {
            name: 'orderBy',
            in: 'query',
            required: false,
            type: 'string',
          },
          {
            name: 'pageNo',
            in: 'query',
            required: false,
            type: 'integer',
            format: 'int32',
          },
          {
            name: 'pageSize',
            in: 'query',
            required: false,
            type: 'integer',
            format: 'int32',
          },
          {
            name: 'startTimeFrom',
            in: 'query',
            description: '课节开始时间start',
            required: false,
            type: 'string',
            format: 'date-time',
          },
          {
            name: 'startTimeTo',
            in: 'query',
            description: '课节开始时间end',
            required: false,
            type: 'string',
            format: 'date-time',
          },
          {
            name: 'studentUid',
            in: 'query',
            description: '学生uid',
            required: false,
            type: 'integer',
            format: 'int64',
          },
          {
            name: 'teacherUid',
            in: 'query',
            description: '老师uid',
            required: false,
            type: 'integer',
            format: 'int64',
          },
          {
            name: 'updateBeginDate',
            in: 'query',
            required: false,
            type: 'string',
            format: 'date-time',
          },
          {
            name: 'updateBy',
            in: 'query',
            required: false,
            type: 'integer',
            format: 'int64',
          },
          {
            name: 'updateEndDate',
            in: 'query',
            required: false,
            type: 'string',
            format: 'date-time',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/Page«PageEndLessonRes»',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/lesson/pageLessonByParam': {
      post: {
        tags: [
          '课节-sjw',
        ],
        summary: '获取课节列表',
        operationId: 'pageLessonByParamUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'lessonQueryReq',
            description: 'lessonQueryReq',
            required: true,
            schema: {
              $ref: '#/definitions/查询课节 model',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/Page«课节查询model»',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/lesson/pageLessonEvent': {
      post: {
        tags: [
          '课节-sjw',
        ],
        summary: '获取课节事件',
        operationId: 'pageLessonEventUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'lessonEventQueryReq',
            description: 'lessonEventQueryReq',
            required: true,
            schema: {
              $ref: '#/definitions/LessonEventQueryReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/Page«LessonEventQueryRes»',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/lesson/pageTeacherLessonByTuid': {
      post: {
        tags: [
          '课节-sjw',
        ],
        summary: '分页查询老师的课程表',
        operationId: 'pageTeacherLessonByTuidUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'lessonTeacherReq',
            description: 'lessonTeacherReq',
            required: true,
            schema: {
              $ref: '#/definitions/老师课程表model',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/Page«学生课节实例model»',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/lesson/switchLiveTypeBySid': {
      post: {
        tags: [
          '课节-sjw',
        ],
        summary: '切换直播类型(线路)',
        operationId: 'switchLiveTypeBySidUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'liveType',
            description: 'liveType',
            required: true,
            schema: {
              $ref: '#/definitions/当前sid的liveType',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'boolean',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/lessonCompen/add': {
      post: {
        tags: [
          '补偿管理-ygy',
        ],
        summary: '创建补偿申请单',
        operationId: 'addUsingPOST_11',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'lessonCompenAddReq',
            description: 'lessonCompenAddReq',
            required: true,
            schema: {
              $ref: '#/definitions/创建补偿申请 model',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/BooleanRes«long»',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/lessonCompen/approval/{id}': {
      put: {
        tags: [
          '补偿管理-ygy',
        ],
        summary: '审批补偿申请单',
        description: 'true 成功，false 失败',
        operationId: 'approvalUsingPUT',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: '补偿单ID',
            required: true,
            type: 'integer',
            minimum: 1.0,
            exclusiveMinimum: false,
            format: 'int64',
          },
          {
            in: 'body',
            name: 'lessonCompenVerifyParam',
            description: '审批赠课申请单对象',
            required: true,
            schema: {
              $ref: '#/definitions/LessonCompenVerifyReq',
            },
          },
          {
            in: 'body',
            name: 'req',
            description: 'req',
            required: true,
            schema: {
              $ref: '#/definitions/补偿申请单审批model',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/BooleanRes',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/lessonCompen/get/{id}': {
      get: {
        tags: [
          '补偿管理-ygy',
        ],
        summary: '获取补偿申请单详情',
        operationId: 'getUsingGET_3',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: '补偿单ID',
            required: true,
            type: 'integer',
            minimum: 1.0,
            exclusiveMinimum: false,
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/补偿申请详情 model',
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/lessonCompen/page': {
      post: {
        tags: [
          '补偿管理-ygy',
        ],
        summary: '获取补偿申请单列表',
        operationId: 'pageUsingPOST_7',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'orderRefundPageReq',
            description: 'orderRefundPageReq',
            required: true,
            schema: {
              $ref: '#/definitions/补偿申请分页查询 model',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/Page«补偿申请分页查询结果 model»',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/lessonbiz/batchCancelLesson': {
      post: {
        tags: [
          '课节服务-pjh',
        ],
        summary: '学生取消课节',
        operationId: 'cancelLessonUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'lessonCancelReq',
            description: 'lessonCancelReq',
            required: true,
            schema: {
              $ref: '#/definitions/批量取消课节 model',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/批量取消课节 model',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/lessonbiz/cancelLesson': {
      post: {
        tags: [
          '课节服务-pjh',
        ],
        summary: '学生取消课节',
        operationId: 'cancelLessonUsingPOST_1',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'lessonCancelReq',
            description: 'lessonCancelReq',
            required: true,
            schema: {
              $ref: '#/definitions/取消课节 model',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/取消课节 model',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/lessonbiz/fixSchedule': {
      get: {
        tags: [
          '课节服务-pjh',
        ],
        summary: '排课修复接口',
        operationId: 'fixScheduleUsingGET',
        produces: [
          '*/*',
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/BooleanRes',
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/lessonbiz/generatePreview': {
      post: {
        tags: [
          '课节服务-pjh',
        ],
        summary: '排课预览',
        operationId: 'previewLessonUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'lessonStrategyReq',
            description: 'lessonStrategyReq',
            required: true,
            schema: {
              $ref: '#/definitions/排课策略 model',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/排课预览返回 model',
              },
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/lessonbiz/getCourseAccount': {
      get: {
        tags: [
          '课节服务-pjh',
        ],
        summary: '课程账本',
        operationId: 'getCourseAccountUsingGET_1',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'courseId',
            in: 'query',
            description: '课程id',
            required: true,
            type: 'integer',
            minimum: 1.0,
            exclusiveMinimum: false,
            format: 'int64',
          },
          {
            name: 'studentUid',
            in: 'query',
            description: '学生id',
            required: true,
            type: 'integer',
            minimum: 1.0,
            exclusiveMinimum: false,
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/账本 model',
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/lessonbiz/getLeftStandardClassNum': {
      get: {
        tags: [
          '课节服务-pjh',
        ],
        summary: '获取课程剩余课序数',
        operationId: 'getLeftStandardClassNumUsingGET',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'courseId',
            in: 'query',
            description: '课程id',
            required: true,
            type: 'integer',
            minimum: 1.0,
            exclusiveMinimum: false,
            format: 'int64',
          },
          {
            name: 'standardClassId',
            in: 'query',
            description: '首次上课课序id',
            required: false,
            type: 'integer',
            format: 'int64',
          },
          {
            name: 'uid',
            in: 'query',
            description: '学生id',
            required: true,
            type: 'integer',
            minimum: 1.0,
            exclusiveMinimum: false,
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/CourseStandarClassRes',
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/lessonbiz/listLessonEventData': {
      get: {
        tags: [
          '课节业务',
        ],
        summary: '根据课节ID获取课节信息',
        description: 'ResponseEntity $listLessonEventData(java.lang.Long)',
        operationId: '$listLessonEventData',
        parameters: [
          {
            name: 'lessonId',
            in: 'query',
            required: true,
            type: 'integer',
            format: 'int64',
          },
        ],
        responses: {
          200: {
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/$listLessonEventData46TbLessonEventDataDtoRes',
              },
            },
          },
        },
        deprecated: false,
      },
    },
    '/lessonbiz/resetStandardClass': {
      put: {
        tags: [
          '课节服务-pjh',
        ],
        summary: '切课',
        operationId: 'resetStandardClassUsingPUT',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'resetStandardClassReq',
            description: 'resetStandardClassReq',
            required: true,
            schema: {
              $ref: '#/definitions/切课 model',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/BooleanRes',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/lessonbiz/resetStandardClassCheck': {
      post: {
        tags: [
          '课节服务-pjh',
        ],
        summary: '切课前检查',
        operationId: 'resetStandardClassCheckUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'resetStandardClassReq',
            description: 'resetStandardClassReq',
            required: true,
            schema: {
              $ref: '#/definitions/切课 model',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/切课检查 model',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/lessonbiz/schedule': {
      post: {
        tags: [
          '课节服务-pjh',
        ],
        summary: '确认排课',
        operationId: 'scheduleLessonUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'lessonStrategyReq',
            description: 'lessonStrategyReq',
            required: true,
            schema: {
              $ref: '#/definitions/排课策略 model',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/排课策略 model',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/lessonbiz/shareCourseAccount': {
      post: {
        tags: [
          '课节服务-pjh',
        ],
        summary: '扩科',
        operationId: 'shareCourseUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'courseShareReq',
            description: 'courseShareReq',
            required: true,
            schema: {
              $ref: '#/definitions/扩科',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/BooleanRes',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/login': {
      get: {
        tags: [
          'login-controller',
        ],
        summary: 'login',
        operationId: 'loginUsingGET',
        produces: [
          '*/*',
        ],
        responses: {
          200: {
            description: 'OK',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
      head: {
        tags: [
          'login-controller',
        ],
        summary: 'login',
        operationId: 'loginUsingHEAD',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        responses: {
          200: {
            description: 'OK',
          },
          204: {
            description: 'No Content',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
        },
        deprecated: false,
      },
      post: {
        tags: [
          'login-controller',
        ],
        summary: 'login',
        operationId: 'loginUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        responses: {
          200: {
            description: 'OK',
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
      put: {
        tags: [
          'login-controller',
        ],
        summary: 'login',
        operationId: 'loginUsingPUT',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        responses: {
          200: {
            description: 'OK',
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
      delete: {
        tags: [
          'login-controller',
        ],
        summary: 'login',
        operationId: 'loginUsingDELETE',
        produces: [
          '*/*',
        ],
        responses: {
          200: {
            description: 'OK',
          },
          204: {
            description: 'No Content',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
        },
        deprecated: false,
      },
      options: {
        tags: [
          'login-controller',
        ],
        summary: 'login',
        operationId: 'loginUsingOPTIONS',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        responses: {
          200: {
            description: 'OK',
          },
          204: {
            description: 'No Content',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
        },
        deprecated: false,
      },
      patch: {
        tags: [
          'login-controller',
        ],
        summary: 'login',
        operationId: 'loginUsingPATCH',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        responses: {
          200: {
            description: 'OK',
          },
          204: {
            description: 'No Content',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
        },
        deprecated: false,
      },
    },
    '/login/loginOut': {
      get: {
        tags: [
          'login-controller',
        ],
        summary: 'logout2',
        operationId: 'logout2UsingGET',
        produces: [
          '*/*',
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'string',
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
      head: {
        tags: [
          'login-controller',
        ],
        summary: 'logout2',
        operationId: 'logout2UsingHEAD',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'string',
            },
          },
          204: {
            description: 'No Content',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
        },
        deprecated: false,
      },
      post: {
        tags: [
          'login-controller',
        ],
        summary: 'logout2',
        operationId: 'logout2UsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'string',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
      put: {
        tags: [
          'login-controller',
        ],
        summary: 'logout2',
        operationId: 'logout2UsingPUT',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'string',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
      delete: {
        tags: [
          'login-controller',
        ],
        summary: 'logout2',
        operationId: 'logout2UsingDELETE',
        produces: [
          '*/*',
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'string',
            },
          },
          204: {
            description: 'No Content',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
        },
        deprecated: false,
      },
      options: {
        tags: [
          'login-controller',
        ],
        summary: 'logout2',
        operationId: 'logout2UsingOPTIONS',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'string',
            },
          },
          204: {
            description: 'No Content',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
        },
        deprecated: false,
      },
      patch: {
        tags: [
          'login-controller',
        ],
        summary: 'logout2',
        operationId: 'logout2UsingPATCH',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'string',
            },
          },
          204: {
            description: 'No Content',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
        },
        deprecated: false,
      },
    },
    '/logout.do': {
      get: {
        tags: [
          'login-controller',
        ],
        summary: 'logout',
        operationId: 'logoutUsingGET',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'bizLoginIndex',
            in: 'query',
            description: 'bizLoginIndex',
            required: false,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
      head: {
        tags: [
          'login-controller',
        ],
        summary: 'logout',
        operationId: 'logoutUsingHEAD',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'bizLoginIndex',
            in: 'query',
            description: 'bizLoginIndex',
            required: false,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
          },
          204: {
            description: 'No Content',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
        },
        deprecated: false,
      },
      post: {
        tags: [
          'login-controller',
        ],
        summary: 'logout',
        operationId: 'logoutUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'bizLoginIndex',
            in: 'query',
            description: 'bizLoginIndex',
            required: false,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
      put: {
        tags: [
          'login-controller',
        ],
        summary: 'logout',
        operationId: 'logoutUsingPUT',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'bizLoginIndex',
            in: 'query',
            description: 'bizLoginIndex',
            required: false,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
      delete: {
        tags: [
          'login-controller',
        ],
        summary: 'logout',
        operationId: 'logoutUsingDELETE',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'bizLoginIndex',
            in: 'query',
            description: 'bizLoginIndex',
            required: false,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
          },
          204: {
            description: 'No Content',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
        },
        deprecated: false,
      },
      options: {
        tags: [
          'login-controller',
        ],
        summary: 'logout',
        operationId: 'logoutUsingOPTIONS',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'bizLoginIndex',
            in: 'query',
            description: 'bizLoginIndex',
            required: false,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
          },
          204: {
            description: 'No Content',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
        },
        deprecated: false,
      },
      patch: {
        tags: [
          'login-controller',
        ],
        summary: 'logout',
        operationId: 'logoutUsingPATCH',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'bizLoginIndex',
            in: 'query',
            description: 'bizLoginIndex',
            required: false,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
          },
          204: {
            description: 'No Content',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
        },
        deprecated: false,
      },
    },
    '/notify/send': {
      post: {
        tags: [
          '通知',
        ],
        summary: '发送通知',
        operationId: 'sendUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'req',
            description: 'req',
            required: true,
            schema: {
              $ref: '#/definitions/消息通知 model',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'integer',
              format: 'int64',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/notify/sendReport': {
      post: {
        tags: [
          '通知',
        ],
        summary: '发送课后点评报告',
        operationId: 'sendReportUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'req',
            description: 'req',
            required: true,
            schema: {
              $ref: '#/definitions/发送课后点评报告 req',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/BooleanRes«long»',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/notify/sms': {
      post: {
        tags: [
          '通知',
        ],
        summary: '发送短信',
        operationId: 'smsUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'req',
            description: 'req',
            required: true,
            schema: {
              $ref: '#/definitions/发短信 req',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/BooleanRes«long»',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/order/buyOrderDetails/{orderCode}': {
      get: {
        tags: [
          '订单管理',
        ],
        summary: '获取订单详情列表',
        operationId: 'listBuyOrderDetailsUsingGET',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'orderCode',
            in: 'path',
            description: '订单编号',
            required: true,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/OrderDetailRes',
              },
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/order/cancel/{orderCode}': {
      put: {
        tags: [
          '订单管理',
        ],
        summary: '取消订单',
        description: '返回取消成功的订单编号',
        operationId: 'cancelUsingPUT',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'orderCancelReq',
            description: 'orderCancelReq',
            required: true,
            schema: {
              $ref: '#/definitions/订单取消model',
            },
          },
          {
            name: 'orderCode',
            in: 'path',
            description: '订单编号',
            required: true,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'string',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/order/coupon/{orderCode}': {
      get: {
        tags: [
          '订单管理',
        ],
        summary: '根据订单编号获取优惠明细',
        operationId: 'getOrderCouponByOrdeCodeUsingGET',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'orderCode',
            in: 'path',
            description: '订单编号',
            required: true,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/PreviewCouponRes',
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/order/fixOrder': {
      post: {
        tags: [
          '订单管理',
        ],
        summary: '订单修复接口',
        operationId: 'fixOrderUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'abnormalOrderReq',
            description: 'abnormalOrderReq',
            required: true,
            schema: {
              $ref: '#/definitions/AbnormalOrderReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/BooleanRes',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/order/getDeadline/{id}': {
      get: {
        tags: [
          '订单管理',
        ],
        summary: '获取订单内产品最长的有效期',
        operationId: 'getDeadlineUsingGET',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: '订单Id',
            required: true,
            type: 'integer',
            minimum: 1.0,
            exclusiveMinimum: false,
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/订单过期情况 model',
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/order/getOrderByCode': {
      get: {
        tags: [
          '订单管理',
        ],
        summary: '根据订单号查询订单详情',
        operationId: 'getByCodeUsingGET',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'orderCode',
            in: 'query',
            description: '订单编号',
            required: true,
            type: 'string',
          },
          {
            name: 'signAgreement',
            in: 'query',
            description: '获取协议签订情况',
            required: false,
            type: 'boolean',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/OrderRes',
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/order/hasPayOrder': {
      get: {
        tags: [
          '订单管理',
        ],
        summary: '检查是否存在该支付单',
        description: 'true 存在，false 不存在',
        operationId: 'hasPayOrderUsingGET',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'chId',
            in: 'query',
            description: '支付渠道',
            required: true,
            type: 'string',
          },
          {
            name: 'chOrderId',
            in: 'query',
            description: '支付渠道订单号',
            required: true,
            type: 'string',
          },
          {
            name: 'payMethod',
            in: 'query',
            description: '支付方式',
            required: true,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'boolean',
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/order/list': {
      post: {
        tags: [
          '订单管理',
        ],
        summary: '查询订单分页列表',
        operationId: 'pageUsingPOST_8',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'orderReq',
            description: 'orderReq',
            required: true,
            schema: {
              $ref: '#/definitions/OrderReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/Page«OrderRes»',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/order/listByStudent': {
      post: {
        tags: [
          '订单管理',
        ],
        summary: '根据学生信息查询订单列表，分页',
        operationId: 'pageByStudentUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'studentOrderReq',
            description: 'studentOrderReq',
            required: true,
            schema: {
              $ref: '#/definitions/StudentOrderReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/Page«OrderRes»',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/order/listShareCourse': {
      post: {
        tags: [
          '订单管理',
        ],
        summary: '获取学生课程共享课程订单列表',
        operationId: 'listShareCourseOrderUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'shareCourseParam',
            description: '共享课程请求model',
            required: true,
            schema: {
              $ref: '#/definitions/ShareCourseReq',
            },
          },
          {
            in: 'body',
            name: 'shareCourseReq',
            description: 'shareCourseReq',
            required: true,
            schema: {
              $ref: '#/definitions/共享课程请求model',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/ShareCourseOrderRes',
              },
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/order/orderBizLogs/{orderCode}': {
      get: {
        tags: [
          '订单管理',
        ],
        summary: '根据订单编号获取操作列表',
        operationId: 'listBizLogsByOrdeCodeUsingGET',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'orderCode',
            in: 'path',
            description: '订单编号',
            required: true,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/OrderBizLogRes',
              },
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/order/orderPayDetails/{orderCode}': {
      get: {
        tags: [
          '订单管理',
        ],
        summary: '获取支付详情列表',
        operationId: 'listPayDetailByOrderCodeUsingGET',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'orderCode',
            in: 'path',
            description: '订单编号',
            required: true,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/OrderPayDetailRes',
              },
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/order/pageAbnormal': {
      post: {
        tags: [
          '订单管理',
        ],
        summary: '根据学生信息分页查询订单列表',
        operationId: 'pageAbnormalUsingPOST_1',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'abnormalOrderReq',
            description: 'abnormalOrderReq',
            required: true,
            schema: {
              $ref: '#/definitions/AbnormalOrderReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/Page«OrderRes»',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/order/previewCoupon': {
      post: {
        tags: [
          '订单管理',
        ],
        summary: '预览订单优惠金额',
        operationId: 'previewCouponUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'orderAddReq',
            description: 'orderAddReq',
            required: true,
            schema: {
              $ref: '#/definitions/订单新增 model',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/PreviewCouponRes',
              },
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/order/recordPay/{orderCode}': {
      post: {
        tags: [
          '订单管理',
        ],
        summary: '录入支付单',
        operationId: 'manualPayUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'orderCode',
            in: 'path',
            description: '订单编号',
            required: true,
            type: 'string',
          },
          {
            in: 'body',
            name: 'payDetails',
            description: 'payDetails',
            required: true,
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/录入支付单 model',
              },
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/OrderPayDetailRes',
              },
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/order/submitK12Order': {
      post: {
        tags: [
          'K12数据割接接口',
        ],
        summary: 'addOrder',
        operationId: 'addOrderUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'orderAddReq',
            description: 'orderAddReq',
            required: true,
            schema: {
              $ref: '#/definitions/订单新增 model',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/OrderResult',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/order/submitOrder': {
      post: {
        tags: [
          '订单管理',
        ],
        summary: '创建订单',
        operationId: 'addOrderUsingPOST_1',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'orderAddReq',
            description: 'orderAddReq',
            required: true,
            schema: {
              $ref: '#/definitions/订单新增 model',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/OrderResult',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/orderGift/add': {
      post: {
        tags: [
          '赠课管理-ygy',
        ],
        summary: '创建赠课申请单',
        operationId: 'addUsingPOST_12',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'orderGiftAddParam',
            description: '创建赠课申请单对象',
            required: true,
            schema: {
              $ref: '#/definitions/OrderGiftAddReq',
            },
          },
          {
            in: 'body',
            name: 'orderGiftAddReq',
            description: 'orderGiftAddReq',
            required: true,
            schema: {
              $ref: '#/definitions/创建赠课申请 model',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/BooleanRes«long»',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/orderGift/approval/{id}': {
      put: {
        tags: [
          '赠课管理-ygy',
        ],
        summary: '审批赠送申请单',
        description: 'true 成功，false 失败',
        operationId: 'approvalUsingPUT_1',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: '赠课申请单ID',
            required: true,
            type: 'integer',
            minimum: 1.0,
            exclusiveMinimum: false,
            format: 'int64',
          },
          {
            in: 'body',
            name: 'orderGiftVerifyParam',
            description: '审批赠课申请单对象',
            required: true,
            schema: {
              $ref: '#/definitions/OrderGiftVerifyReq',
            },
          },
          {
            in: 'body',
            name: 'orderGiftVerifyReq',
            description: 'orderGiftVerifyReq',
            required: true,
            schema: {
              $ref: '#/definitions/订单赠课申请单审批model',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/BooleanRes',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/orderGift/get/{id}': {
      get: {
        tags: [
          '赠课管理-ygy',
        ],
        summary: '获取赠课申请单详情',
        operationId: 'getUsingGET_5',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: '赠送单ID',
            required: true,
            type: 'integer',
            minimum: 1.0,
            exclusiveMinimum: false,
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/赠课申请详情 model',
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/orderGift/page': {
      post: {
        tags: [
          '赠课管理-ygy',
        ],
        summary: '获取赠课申请单列表',
        operationId: 'pageUsingPOST_9',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'orderGiftPageParam',
            description: '赠课申请单列表查询参数',
            required: true,
            schema: {
              $ref: '#/definitions/OrderGiftPageReq',
            },
          },
          {
            in: 'body',
            name: 'orderGiftPageReq',
            description: 'orderGiftPageReq',
            required: true,
            schema: {
              $ref: '#/definitions/赠课申请分页查询 model',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/Page«赠课申请分页查询结果 model»',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/orderRefund/add': {
      post: {
        tags: [
          '订单退费管理-ygy',
        ],
        summary: '创建订单退费申请单',
        operationId: 'addUsingPOST_13',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'orderRefundAddParam',
            description: '创建订单退费申请单对象',
            required: true,
            schema: {
              $ref: '#/definitions/OrderRefundAddReq',
            },
          },
          {
            in: 'body',
            name: 'orderRefundAddReq',
            description: 'orderRefundAddReq',
            required: true,
            schema: {
              $ref: '#/definitions/订单退费申请 model',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/BooleanRes«long»',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/orderRefund/approval/{id}': {
      put: {
        tags: [
          '订单退费管理-ygy',
        ],
        summary: '审批退费申请单',
        operationId: 'approvalUsingPUT_2',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'OrderRefundVerifyParam',
            description: '审批订单退费申请单对象',
            required: true,
            schema: {
              $ref: '#/definitions/OrderRefundVerifyReq',
            },
          },
          {
            name: 'id',
            in: 'path',
            description: '退费申请单ID',
            required: true,
            type: 'integer',
            minimum: 1.0,
            exclusiveMinimum: false,
            format: 'int64',
          },
          {
            in: 'body',
            name: 'orderRefundVerifyReq',
            description: 'orderRefundVerifyReq',
            required: true,
            schema: {
              $ref: '#/definitions/订单退费申请单审批model',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/BooleanRes«订单退费前检查结果 model»',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/orderRefund/get/{id}': {
      get: {
        tags: [
          '订单退费管理-ygy',
        ],
        summary: '获取订单退费申请详情',
        operationId: 'getUsingGET_6',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: '退费申请单ID',
            required: true,
            type: 'integer',
            minimum: 1.0,
            exclusiveMinimum: false,
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/订单退费申请单详情',
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/orderRefund/getLatestByOrderId': {
      get: {
        tags: [
          '订单退费管理-ygy',
        ],
        summary: '根据订单Id，获取最近的退费申请详情',
        operationId: 'getLatestByOrderIdUsingGET',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'orderId',
            in: 'query',
            description: '订单ID',
            required: true,
            type: 'integer',
            minimum: 1.0,
            exclusiveMinimum: false,
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/订单退费申请单详情',
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/orderRefund/listRefundableDetail/{orderId}': {
      get: {
        tags: [
          '订单退费管理-ygy',
        ],
        summary: '获取退费课程详情列表',
        operationId: 'listRefundableDetailUsingGET',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'orderId',
            in: 'path',
            description: '订单Id',
            required: true,
            type: 'integer',
            minimum: 1.0,
            exclusiveMinimum: false,
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/订单退费课程详情列表 model',
              },
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/orderRefund/page': {
      post: {
        tags: [
          '订单退费管理-ygy',
        ],
        summary: '获取退费申请单分页列表',
        operationId: 'pageUsingPOST_10',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'orderRefundPageParam',
            description: '退费申请单列表查询参数',
            required: true,
            schema: {
              $ref: '#/definitions/OrderRefundPageReq',
            },
          },
          {
            in: 'body',
            name: 'orderRefundPageReq',
            description: 'orderRefundPageReq',
            required: true,
            schema: {
              $ref: '#/definitions/OrderRefundPageReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/Page«退费申请分页查询结果 model»',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/orderRefund/preCheck/{orderId}': {
      get: {
        tags: [
          '订单退费管理-ygy',
        ],
        summary: '订单退费申请前检查',
        operationId: 'preCheckUsingGET',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'orderId',
            in: 'path',
            description: '订单Id',
            required: true,
            type: 'integer',
            minimum: 1.0,
            exclusiveMinimum: false,
            format: 'int64',
          },
          {
            name: 'uid',
            in: 'query',
            description: '学生Id',
            required: true,
            type: 'integer',
            minimum: 1.0,
            exclusiveMinimum: false,
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/订单退费前检查结果 model',
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/ppt/get/{pptKey}': {
      get: {
        tags: [
          'ppt-sjw',
        ],
        summary: 'getByKey',
        operationId: 'getByKeyUsingGET',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'pptKey',
            in: 'path',
            description: 'pptKey',
            required: true,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/PptRes',
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/ppt/upload': {
      post: {
        tags: [
          'ppt-sjw',
        ],
        summary: 'upload',
        operationId: 'uploadUsingPOST',
        consumes: [
          'multipart/form-data',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'ppt',
            in: 'formData',
            description: 'ppt',
            required: true,
            type: 'file',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'object',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/preCase/getById': {
      get: {
        tags: [
          '准线索',
        ],
        summary: '获取准线索详情',
        description: 'ResponseEntity $getById(java.lang.Long)',
        operationId: '$getById',
        parameters: [
          {
            name: 'id',
            in: 'query',
            required: true,
            type: 'integer',
            format: 'int64',
          },
        ],
        responses: {
          200: {
            schema: {
              $ref: '#/definitions/$getById63CrmCasePreDtoRes',
            },
          },
        },
        deprecated: false,
      },
    },
    '/preCase/listCrmCaseAppStat': {
      post: {
        tags: [
          '准线索',
        ],
        summary: '获取准线索app统计',
        description: 'ResponseEntity $listCrmCaseAppStat(cn.edu100.hippo.crm.server.dto.$listCrmCaseAppStat63ApiCrmCaseAppStatQryDtoReq)',
        operationId: '$listCrmCaseAppStat',
        parameters: [
          {
            in: 'body',
            name: 'crmCaseAppStatQryDto',
            required: false,
            schema: {
              $ref: '#/definitions/$listCrmCaseAppStat63ApiCrmCaseAppStatQryDtoReq',
            },
          },
        ],
        responses: {
          200: {
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/$listCrmCaseAppStat63CrmCaseAppStatDtoRes',
              },
            },
          },
        },
        deprecated: false,
      },
    },
    '/preCase/page': {
      post: {
        tags: [
          '准线索',
        ],
        summary: '分页获取准线索列表',
        description: 'ResponseEntity $page(cn.edu100.hippo.crm.server.dto.$page63ApiCrmCasePreQryDtoReq)',
        operationId: '$page',
        parameters: [
          {
            in: 'body',
            name: 'qryDto',
            required: true,
            schema: {
              $ref: '#/definitions/$page63ApiCrmCasePreQryDtoReq',
            },
          },
        ],
        responses: {
          200: {
            schema: {
              type: 'object',
              properties: {
                first: {
                  type: 'integer',
                  format: 'int32',
                },
                firstPage: {
                  type: 'boolean',
                },
                last: {
                  type: 'integer',
                  format: 'int32',
                },
                lastPage: {
                  type: 'boolean',
                },
                list: {
                  type: 'array',
                  items: {
                    $ref: '#/definitions/$page63CrmCasePreDtoRes',
                  },
                },
                next: {
                  type: 'integer',
                  format: 'int32',
                },
                pageNo: {
                  type: 'integer',
                  format: 'int32',
                },
                pageSize: {
                  type: 'integer',
                  format: 'int64',
                },
                prev: {
                  type: 'integer',
                  format: 'int32',
                },
                total: {
                  type: 'integer',
                  format: 'int64',
                },
              },
            },
          },
        },
        deprecated: false,
      },
    },
    '/preCase/pageCrmCaseAccessLog': {
      post: {
        tags: [
          '准线索',
        ],
        summary: '分页获取访问记录',
        description: 'ResponseEntity $pageCrmCaseAccessLog(cn.edu100.hippo.crm.server.dto.$pageCrmCaseAccessLog63ApiCrmCaseAccessQryDtoReq)',
        operationId: '$pageCrmCaseAccessLog',
        parameters: [
          {
            in: 'body',
            name: 'crmCaseAccessQryDto',
            required: false,
            schema: {
              $ref: '#/definitions/$pageCrmCaseAccessLog63ApiCrmCaseAccessQryDtoReq',
            },
          },
        ],
        responses: {
          200: {
            schema: {
              type: 'object',
              properties: {
                first: {
                  type: 'integer',
                  format: 'int32',
                },
                firstPage: {
                  type: 'boolean',
                },
                last: {
                  type: 'integer',
                  format: 'int32',
                },
                lastPage: {
                  type: 'boolean',
                },
                list: {
                  type: 'array',
                  items: {
                    $ref: '#/definitions/$pageCrmCaseAccessLog63CrmCaseAccessLogDtoRes',
                  },
                },
                next: {
                  type: 'integer',
                  format: 'int32',
                },
                pageNo: {
                  type: 'integer',
                  format: 'int32',
                },
                pageSize: {
                  type: 'integer',
                  format: 'int64',
                },
                prev: {
                  type: 'integer',
                  format: 'int32',
                },
                total: {
                  type: 'integer',
                  format: 'int64',
                },
              },
            },
          },
        },
        deprecated: false,
      },
    },
    '/school/add': {
      post: {
        tags: [
          '幼儿园管理界面',
        ],
        summary: '添加幼儿园渠道',
        operationId: 'addUsingPOST_14',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'req',
            description: 'req',
            required: true,
            schema: {
              $ref: '#/definitions/渠道详情页入参',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/渠道详情页',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/school/delete': {
      post: {
        tags: [
          '幼儿园管理界面',
        ],
        summary: '删除渠道',
        operationId: 'deleteUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'id',
            description: 'id',
            required: true,
            schema: {
              type: 'integer',
              format: 'int64',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/school/list': {
      post: {
        tags: [
          '幼儿园管理界面',
        ],
        summary: '幼儿园渠道列表',
        operationId: 'listUsingPOST_5',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'req',
            description: 'req',
            required: true,
            schema: {
              $ref: '#/definitions/渠道列表入参',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/Page«SchoolRes»',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/school/update': {
      post: {
        tags: [
          '幼儿园管理界面',
        ],
        summary: '更新幼儿园渠道详情页',
        operationId: 'updateUsingPOST_2',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'req',
            description: 'req',
            required: true,
            schema: {
              $ref: '#/definitions/渠道详情页更新入参',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/渠道详情页',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/shareCourse/shareCourseInf': {
      get: {
        tags: [
          '4.0学生升年级扩科',
        ],
        summary: '扩科接口',
        operationId: 'shareCourseUsingGET',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'orderCode',
            in: 'query',
            description: '订单号',
            required: false,
            type: 'string',
          },
          {
            name: 'orderId',
            in: 'query',
            description: '订单id（通过orderCode 换取 orderId）',
            required: false,
            type: 'integer',
            format: 'int64',
          },
          {
            name: 'shareFromCourseId',
            in: 'query',
            description: '原课程ID ',
            required: false,
            type: 'integer',
            format: 'int64',
          },
          {
            name: 'shareToCourseId',
            in: 'query',
            description: '扩科课程ID',
            required: false,
            type: 'integer',
            format: 'int64',
          },
          {
            name: 'uid',
            in: 'query',
            description: '学生uid',
            required: false,
            type: 'integer',
            format: 'int64',
          },
          {
            name: 'updateBy',
            in: 'query',
            description: '操作人',
            required: false,
            type: 'integer',
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'string',
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/standardClass/ev/add': {
      post: {
        tags: [
          '课序-hlh',
        ],
        summary: '新增课序',
        operationId: 'addStandardClassEditVersionUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'standardClassAddReq',
            description: 'standardClassAddReq',
            required: true,
            schema: {
              $ref: '#/definitions/StandardClassAddReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'integer',
              format: 'int64',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/standardClass/ev/listByTextBookId/{textBookId}': {
      get: {
        tags: [
          '课序-hlh',
        ],
        summary: '根据教材id课序获取课序列表',
        operationId: 'listStandardClassByTextBookIdUsingGET',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'textBookId',
            in: 'path',
            description: 'textBookId',
            required: true,
            type: 'integer',
            minimum: 1.0,
            exclusiveMinimum: false,
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/课序 model',
              },
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/standardClass/ev/update/{id}': {
      put: {
        tags: [
          '课序-hlh',
        ],
        summary: '更新课序',
        operationId: 'updatetandardClassEditVersionUsingPUT',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'id',
            required: true,
            type: 'integer',
            format: 'int64',
          },
          {
            in: 'body',
            name: 'standardClassAddReq',
            description: 'standardClassAddReq',
            required: true,
            schema: {
              $ref: '#/definitions/StandardClassAddReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'integer',
              format: 'int64',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/standardClass/ev/updateContent/{id}': {
      put: {
        tags: [
          '课序-hlh',
        ],
        summary: '更新课序教学内容',
        operationId: 'updateContentUsingPUT_1',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'id',
            required: true,
            type: 'integer',
            format: 'int64',
          },
          {
            in: 'body',
            name: 'updateContentReq',
            description: 'updateContentReq',
            required: true,
            schema: {
              $ref: '#/definitions/课序内容更新 model',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'integer',
              format: 'int32',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/standardClass/ev/{id}': {
      delete: {
        tags: [
          '课序-hlh',
        ],
        summary: '删除课序',
        operationId: 'deleteUsingDELETE_3',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'id',
            required: true,
            type: 'integer',
            minimum: 0.0,
            exclusiveMinimum: false,
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'integer',
              format: 'int64',
            },
          },
          204: {
            description: 'No Content',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
        },
        deprecated: false,
      },
    },
    '/standardClass/getByIdAndType': {
      get: {
        tags: [
          '课序-hlh',
        ],
        summary: '查询课序详情',
        operationId: 'getUsingGET_7',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'standardClassId',
            in: 'query',
            description: 'standardClassId',
            required: true,
            type: 'integer',
            format: 'int64',
          },
          {
            name: 'type',
            in: 'query',
            description: 'type',
            required: true,
            type: 'integer',
            format: 'int32',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/章节 model 聚合',
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/stuAgreement/hasUnsigned': {
      get: {
        tags: [
          '学生协议-ygy',
        ],
        summary: '课程是否未签协议',
        operationId: 'hasUnsignedUsingGET',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'courseId',
            in: 'query',
            description: '课程id',
            required: true,
            type: 'integer',
            minimum: 1.0,
            exclusiveMinimum: false,
            format: 'int64',
          },
          {
            name: 'uid',
            in: 'query',
            description: '学生id',
            required: true,
            type: 'integer',
            minimum: 1.0,
            exclusiveMinimum: false,
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/BooleanRes«List«long»»',
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/student/add': {
      post: {
        tags: [
          '学生信息-hlh',
        ],
        summary: '学生管理 - 新增学生',
        description: '  获取性别列表：/busiConfig/getBusiConfigs?type=sex <br/>  获取当前年级类别：/busiConfig/getBusiConfigs?type=grade <br/>  获取家长身份列表： /busiConfig/getBusiConfigs?type=relations <br/>  获取学生类型列表： /busiConfig/getBusiConfigs?type=stuType <br/>  补充TbStudentFamilyDto对象说明： wayOfViewMsg 0(短信) 1(微信) <br/>',
        operationId: 'addUsingPOST_16',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'stuAddReq',
            description: '添加学生传递的参数对象',
            required: true,
            schema: {
              $ref: '#/definitions/StuAddReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/StuAddRes',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/student/addByUid': {
      post: {
        tags: [
          '学生信息-hlh',
        ],
        summary: '根据uid添加学生',
        operationId: 'addByUidUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'stuManuAddReq',
            description: '添加学生Req',
            required: true,
            schema: {
              $ref: '#/definitions/StuManuAddReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/StudentRes',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/student/get/{uid}': {
      get: {
        tags: [
          '学生信息-hlh',
        ],
        summary: '根据Uid查询学生信息',
        operationId: 'getUsingGET_9',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'uid',
            in: 'path',
            description: '学生uid',
            required: true,
            type: 'integer',
            minimum: 1.0,
            exclusiveMinimum: false,
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/StuAllInfoRes',
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/student/getByMobile/{mobile}': {
      get: {
        tags: [
          '学生信息-hlh',
        ],
        summary: '根据手机号查询学生信息',
        operationId: 'getByMobileUsingGET',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'mobile',
            in: 'path',
            description: '手机号',
            required: true,
            type: 'string',
            maxLength: 11,
            minLength: 11,
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/StudentRes',
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/student/list': {
      post: {
        tags: [
          '学生信息-hlh',
        ],
        summary: '学生管理 - 查询列表',
        operationId: 'listByUidOrMobileUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'stuInfoReq',
            description: 'stuInfoReq',
            required: true,
            schema: {
              $ref: '#/definitions/StuInfoReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/StuInfoRes',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/student/update': {
      put: {
        tags: [
          '学生信息-hlh',
        ],
        summary: '学生管理 - 编辑学生',
        operationId: 'updateUsingPUT_10',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'stuEditReq',
            description: '编辑学生传递的参数对象',
            required: true,
            schema: {
              $ref: '#/definitions/StuEditReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/StuEditRes',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/studentManagement/add': {
      post: {
        tags: [
          '学生信息-hlh',
        ],
        summary: '学生管理 - 新增学生',
        description: '  获取性别列表：/busiConfig/getBusiConfigs?type=sex <br/>  获取当前年级类别：/busiConfig/getBusiConfigs?type=grade <br/>  获取家长身份列表： /busiConfig/getBusiConfigs?type=relations <br/>  获取学生类型列表： /busiConfig/getBusiConfigs?type=stuType <br/>  补充TbStudentFamilyDto对象说明： wayOfViewMsg 0(短信) 1(微信) <br/>',
        operationId: 'addUsingPOST_17',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'stuAddReq',
            description: '添加学生传递的参数对象',
            required: true,
            schema: {
              $ref: '#/definitions/StuAddReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/StuAddRes',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/studentManagement/addByUid': {
      post: {
        tags: [
          '学生信息-hlh',
        ],
        summary: '根据uid添加学生',
        operationId: 'addByUidUsingPOST_1',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'stuManuAddReq',
            description: '添加学生Req',
            required: true,
            schema: {
              $ref: '#/definitions/StuManuAddReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/StudentRes',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/studentManagement/get/{uid}': {
      get: {
        tags: [
          '学生信息-hlh',
        ],
        summary: '根据Uid查询学生信息',
        operationId: 'getUsingGET_10',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'uid',
            in: 'path',
            description: '学生uid',
            required: true,
            type: 'integer',
            minimum: 1.0,
            exclusiveMinimum: false,
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/StuAllInfoRes',
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/studentManagement/getByMobile/{mobile}': {
      get: {
        tags: [
          '学生信息-hlh',
        ],
        summary: '根据手机号查询学生信息',
        operationId: 'getByMobileUsingGET_1',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'mobile',
            in: 'path',
            description: '手机号',
            required: true,
            type: 'string',
            maxLength: 11,
            minLength: 11,
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/StudentRes',
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/studentManagement/list': {
      post: {
        tags: [
          '学生信息-hlh',
        ],
        summary: '学生管理 - 查询列表',
        operationId: 'listByUidOrMobileUsingPOST_1',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'stuInfoReq',
            description: 'stuInfoReq',
            required: true,
            schema: {
              $ref: '#/definitions/StuInfoReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/StuInfoRes',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/studentManagement/update': {
      put: {
        tags: [
          '学生信息-hlh',
        ],
        summary: '学生管理 - 编辑学生',
        operationId: 'updateUsingPUT_11',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'stuEditReq',
            description: '编辑学生传递的参数对象',
            required: true,
            schema: {
              $ref: '#/definitions/StuEditReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/StuEditRes',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/system/deleteByMobile/{mobile}': {
      get: {
        tags: [
          '系统相关-pjh',
        ],
        summary: 'deleteByMobile',
        operationId: 'deleteByMobileUsingGET',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'mobile',
            in: 'path',
            description: 'mobile',
            required: true,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'string',
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/system/translateCode/edu100AppId/{appId}': {
      get: {
        tags: [
          '系统相关-pjh',
        ],
        summary: 'edu100AppId对应码',
        operationId: 'translateCodeSrvAppIdUsingGET',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'appId',
            in: 'path',
            description: 'appId',
            required: true,
            type: 'integer',
            format: 'int32',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'string',
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/system/translateCode/{code}': {
      get: {
        tags: [
          '系统相关-pjh',
        ],
        summary: '异常码翻译',
        operationId: 'translateCodeUsingGET',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'code',
            in: 'path',
            description: 'code',
            required: true,
            type: 'integer',
            format: 'int32',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'string',
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/system/userinfo': {
      get: {
        tags: [
          '系统相关-pjh',
        ],
        summary: '获取当前登录用户信息',
        operationId: 'userInfoUsingGET',
        produces: [
          '*/*',
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/SysUserRes',
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/teacher/add': {
      post: {
        tags: [
          '老师信息-zyx',
        ],
        summary: '新增老师',
        operationId: 'addUsingPOST_18',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'teacherAddReq',
            description: 'teacherAddReq',
            required: true,
            schema: {
              $ref: '#/definitions/TeacherAddReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/BooleanRes«long»',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/teacher/addTeacherCourseByUid': {
      post: {
        tags: [
          '老师信息-zyx',
        ],
        summary: '添加老师课程关系',
        operationId: 'addTeacherCourseByUidUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'teacherCourseAddReq',
            description: 'teacherCourseAddReq',
            required: true,
            schema: {
              $ref: '#/definitions/TeacherCourseAddReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/BooleanRes«int»',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/teacher/deleteTeacherCourse': {
      put: {
        tags: [
          '老师信息-zyx',
        ],
        summary: '根据tuid和courseId解绑老师课程',
        operationId: 'deleteTeacherCourseUsingPUT',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'teacherCourseDeleteReq',
            description: 'teacherCourseDeleteReq',
            required: true,
            schema: {
              $ref: '#/definitions/TeacherCourseDeleteReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/BooleanRes«int»',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/teacher/get/{tuid}': {
      get: {
        tags: [
          '老师信息-zyx',
        ],
        summary: '根据老师tuid获取老师详情',
        operationId: 'getUsingGET_11',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'tuid',
            in: 'path',
            description: '老师uid',
            required: true,
            type: 'integer',
            minimum: 1.0,
            exclusiveMinimum: false,
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/TeacherRes',
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/teacher/getLessonCount': {
      get: {
        tags: [
          '老师信息-zyx',
        ],
        summary: '查询老师已排未上的课节数量',
        operationId: 'getLessonCountUsingGET',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'courseId',
            in: 'query',
            description: '课程Id',
            required: true,
            type: 'integer',
            minimum: 1.0,
            exclusiveMinimum: false,
            format: 'int64',
          },
          {
            name: 'currentTime',
            in: 'query',
            description: '当前时间戳',
            required: true,
            type: 'integer',
            minimum: 0.0,
            exclusiveMinimum: false,
            format: 'int64',
          },
          {
            name: 'tuid',
            in: 'query',
            description: '老师uid',
            required: true,
            type: 'integer',
            minimum: 1.0,
            exclusiveMinimum: false,
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'integer',
              format: 'int32',
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/teacher/listByCourseId': {
      get: {
        tags: [
          '老师信息-zyx',
        ],
        summary: '根据课程ID查询课程老师',
        operationId: 'listByCourseIdUsingGET',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'courseId',
            in: 'query',
            description: '课程ID',
            required: true,
            type: 'integer',
            minimum: 1.0,
            exclusiveMinimum: false,
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/TeacherRes',
              },
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/teacher/listCourseByTuid/{tuid}': {
      get: {
        tags: [
          '老师信息-zyx',
        ],
        summary: '根据老师tuid查询该老师的所有课程',
        operationId: 'listCourseByTuidUsingGET',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'tuid',
            in: 'path',
            description: '老师uid',
            required: true,
            type: 'integer',
            minimum: 1.0,
            exclusiveMinimum: false,
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/TeacherCourseRes',
              },
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/teacher/page': {
      post: {
        tags: [
          '老师信息-zyx',
        ],
        summary: '分页查询老师',
        description: '不返回老师绑定的课程列表',
        operationId: 'pageUsingPOST_12',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'teacherReq',
            description: 'teacherReq',
            required: true,
            schema: {
              $ref: '#/definitions/TeacherReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/Page«TeacherRes»',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/teacher/update': {
      put: {
        tags: [
          '老师信息-zyx',
        ],
        summary: '编辑老师',
        operationId: 'updateUsingPUT_12',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'teacherUpdateReq',
            description: 'teacherUpdateReq',
            required: true,
            schema: {
              $ref: '#/definitions/TeacherUpdateReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/BooleanRes«int»',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/textbook/approve/{id}': {
      put: {
        tags: [
          '教材-pjh',
        ],
        summary: '审核教材',
        description: 'id:教材id,approveResult:审核结果，10通过，20不通过',
        operationId: 'approveTextBookUsingPUT',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'approveMsg',
            in: 'query',
            description: 'approveMsg',
            required: false,
            type: 'string',
          },
          {
            name: 'approveResult',
            in: 'query',
            description: 'approveResult',
            required: true,
            type: 'integer',
            format: 'int32',
          },
          {
            name: 'id',
            in: 'path',
            description: 'id',
            required: true,
            type: 'integer',
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/TextBookApproveParam',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/textbook/chapters/{id}': {
      get: {
        tags: [
          '教材-pjh',
        ],
        summary: '查询教材目录树',
        description: '根据textBookId获取，返回结构为树状，包含章节和课序信息',
        operationId: 'listChapterByTextBookIdUsingGET',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: '教材id',
            required: true,
            type: 'integer',
            minimum: 0.0,
            exclusiveMinimum: false,
            format: 'int64',
          },
          {
            name: 'queryStandardClass',
            in: 'query',
            description: '是否查询课序',
            required: false,
            type: 'boolean',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/ChapterRes',
              },
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/textbook/columnmeta': {
      get: {
        tags: [
          '教材-pjh',
        ],
        summary: '查询教材列表列定义',
        description: 'column列名称,sortable可排序,type查询字段类型,range查询字段范围，op查询字段操作',
        operationId: 'listColumnMetaUsingGET',
        produces: [
          '*/*',
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/ColumnMeta',
              },
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/textbook/ev/add': {
      post: {
        tags: [
          '教材-pjh',
        ],
        summary: '新增教材',
        operationId: 'addUsingPOST_19',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'textBookAddReq',
            description: 'textBookAddReq',
            required: true,
            schema: {
              $ref: '#/definitions/教材新增 model',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'integer',
              format: 'int64',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/textbook/ev/chapters/{id}': {
      get: {
        tags: [
          '教材-pjh',
        ],
        summary: '查询编辑版本的教材目录树',
        description: '根据textBookId获取，返回结构为树状，包含章节和课序信息',
        operationId: 'listChapterEditVersionByTextBookIdUsingGET',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: '教材id',
            required: true,
            type: 'integer',
            minimum: 0.0,
            exclusiveMinimum: false,
            format: 'int64',
          },
          {
            name: 'queryStandardClass',
            in: 'query',
            description: '是否查询课序',
            required: false,
            type: 'boolean',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/ChapterRes',
              },
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/textbook/ev/page': {
      post: {
        tags: [
          '教材-pjh',
        ],
        summary: '查询教材列表',
        operationId: 'pageEvUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'textBookReq',
            description: 'textBookReq',
            required: false,
            schema: {
              $ref: '#/definitions/教材查询 model',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/Page«教材 model »',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/textbook/ev/submitTextBookForReview': {
      put: {
        tags: [
          '教材-pjh',
        ],
        summary: '教材提交审核',
        operationId: 'submitTextBookForReviewUsingPUT',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'textBookId',
            in: 'query',
            description: 'textBookId',
            required: true,
            type: 'integer',
            minimum: 0.0,
            exclusiveMinimum: false,
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'integer',
              format: 'int64',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/textbook/ev/update/{id}': {
      put: {
        tags: [
          '教材-pjh',
        ],
        summary: '更新教材',
        operationId: 'updateUsingPUT_13',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'id',
            required: true,
            type: 'integer',
            minimum: 1.0,
            exclusiveMinimum: false,
            format: 'int64',
          },
          {
            in: 'body',
            name: 'textBookAddReq',
            description: 'textBookAddReq',
            required: true,
            schema: {
              $ref: '#/definitions/教材新增 model',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'integer',
              format: 'int64',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/textbook/ev/{id}': {
      get: {
        tags: [
          '教材-pjh',
        ],
        summary: '查询编辑中的教材',
        operationId: 'getTextBookEditVersionUsingGET',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'id',
            required: true,
            type: 'integer',
            minimum: 1.0,
            exclusiveMinimum: false,
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/教材 model ',
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/textbook/get/{id}': {
      get: {
        tags: [
          '教材-pjh',
        ],
        summary: '查询教材基本信息',
        description: 'id：教材ID',
        operationId: 'getUsingGET_12',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'id',
            required: true,
            type: 'integer',
            minimum: 1.0,
            exclusiveMinimum: false,
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/教材 model ',
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/textbook/list': {
      post: {
        tags: [
          '教材-pjh',
        ],
        summary: '查询教材列表',
        operationId: 'listUsingPOST_6',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'textBookReq',
            description: 'textBookReq',
            required: false,
            schema: {
              $ref: '#/definitions/教材查询 model',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/Page«教材 model »',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/textbook/listbyqueryable': {
      post: {
        tags: [
          '教材-pjh',
        ],
        summary: '查询教材列表',
        operationId: 'listByQueryableUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'param',
            description: 'param',
            required: false,
            schema: {
              $ref: '#/definitions/QueryReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/Page«教材 model »',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/textbook/page': {
      post: {
        tags: [
          '教材-pjh',
        ],
        summary: '查询教材列表',
        operationId: 'pageUsingPOST_13',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'textBookReq',
            description: 'textBookReq',
            required: false,
            schema: {
              $ref: '#/definitions/教材查询 model',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/Page«教材 model »',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/tools/getIpInfo': {
      get: {
        tags: [
          '工具-sjw',
        ],
        summary: '根据IP获取信息',
        operationId: 'getIpInfoUsingGET',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'ip',
            in: 'query',
            description: 'ip',
            required: true,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/IpInfoRes',
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/tools/getMobileInfo': {
      get: {
        tags: [
          '工具-sjw',
        ],
        summary: '根据手机号获取信息',
        operationId: 'getMobileInfoUsingGET',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'mobile',
            in: 'query',
            description: 'mobile',
            required: true,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/PhoneNumberInfoRes',
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/tools/getWechatApp': {
      get: {
        tags: [
          '工具-sjw',
        ],
        summary: '获取小程序二维码',
        operationId: 'getWxAppMaUsingGET',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'appId',
            in: 'query',
            description: 'appType',
            required: false,
            type: 'string',
          },
          {
            name: 'url',
            in: 'query',
            description: 'url',
            required: false,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'string',
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/tools/listWechatApp': {
      get: {
        tags: [
          '工具-sjw',
        ],
        summary: '获取微信app列表',
        operationId: 'listWechatAppUsingGET',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'appId',
            in: 'query',
            required: false,
            type: 'string',
          },
          {
            name: 'appType',
            in: 'query',
            required: false,
            type: 'string',
          },
          {
            name: 'busiType',
            in: 'query',
            required: false,
            type: 'integer',
            format: 'int32',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/ThirdAppRes',
              },
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/tryLessonbiz/preview': {
      post: {
        tags: [
          '试听排课-ygy',
        ],
        summary: '排课预览',
        operationId: 'previewUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'lessonStrategyReq',
            description: 'lessonStrategyReq',
            required: true,
            schema: {
              $ref: '#/definitions/试听排课策略 model',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/排课预览返回 model',
              },
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/tryLessonbiz/schedule': {
      post: {
        tags: [
          '试听排课-ygy',
        ],
        summary: '确认排课',
        operationId: 'scheduleLessonUsingPOST_1',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'lessonStrategyReq',
            description: 'lessonStrategyReq',
            required: true,
            schema: {
              $ref: '#/definitions/试听排课策略 model',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/试听排课策略 model',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/user/getByMobile/{mobile}': {
      get: {
        tags: [
          '系统相关-pjh',
        ],
        summary: '根据手机号获取用户',
        operationId: 'getByMobileUsingGET_2',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'mobile',
            in: 'path',
            description: 'mobile',
            required: true,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/UserRes',
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/userMessage/accept': {
      post: {
        tags: [
          '用户消息',
        ],
        summary: '主动发起会话',
        operationId: 'acceptUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'acceptReq',
            description: 'acceptReq',
            required: true,
            schema: {
              $ref: '#/definitions/AcceptReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/AcceptRes',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/userMessage/addAgent': {
      post: {
        tags: [
          '用户消息',
        ],
        summary: '添加座席',
        operationId: 'addAgentUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'addReq',
            description: 'addReq',
            required: true,
            schema: {
              $ref: '#/definitions/AgentAddReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/BooleanRes«long»',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/userMessage/addAgentQueue': {
      post: {
        tags: [
          '用户消息',
        ],
        summary: '添加座席队列',
        operationId: 'addAgentQueueUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'addReq',
            description: 'addReq',
            required: true,
            schema: {
              $ref: '#/definitions/AgentQueueAddReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/BooleanRes«long»',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/userMessage/close': {
      post: {
        tags: [
          '用户消息',
        ],
        summary: '关闭会话',
        operationId: 'closeUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'closeReq',
            description: 'closeReq',
            required: true,
            schema: {
              $ref: '#/definitions/CloseReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/BooleanRes«string»',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/userMessage/deleteAgent/{id}': {
      delete: {
        tags: [
          '用户消息',
        ],
        summary: '删除座席',
        operationId: 'deleteAgentUsingDELETE',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: '座席id',
            required: true,
            type: 'integer',
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/BooleanRes«string»',
            },
          },
          204: {
            description: 'No Content',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
        },
        deprecated: false,
      },
    },
    '/userMessage/deleteAgentQueue/{id}': {
      delete: {
        tags: [
          '用户消息',
        ],
        summary: '删除座席队列',
        operationId: 'deleteAgentQueueUsingDELETE',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: '队列id',
            required: true,
            type: 'integer',
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/BooleanRes«string»',
            },
          },
          204: {
            description: 'No Content',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
        },
        deprecated: false,
      },
    },
    '/userMessage/getAgentByUid': {
      get: {
        tags: [
          '用户消息',
        ],
        summary: '根据Uid查询座席信息，附带座席所在队列信息',
        operationId: 'getAgentByUidUsingGET',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'uid',
            in: 'query',
            description: 'uid',
            required: false,
            type: 'integer',
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/AgentAndQueuesRes',
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/userMessage/getAgentByUidAndAppId': {
      get: {
        tags: [
          '用户消息',
        ],
        summary: '根据Uid和appId查询座席信息，附带座席所在队列信息',
        operationId: 'getAgentByUidAndAppIdUsingGET',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'appId',
            description: 'appId',
            required: true,
            schema: {
              type: 'integer',
              format: 'int32',
            },
          },
          {
            name: 'uid',
            in: 'query',
            description: 'uid',
            required: false,
            type: 'integer',
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/AgentRes',
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/userMessage/getAgentTree': {
      get: {
        tags: [
          '用户消息',
        ],
        summary: '获取全部座席（树状结构）',
        operationId: 'getAgentTreeUsingGET',
        produces: [
          '*/*',
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/AgentTreeRes',
              },
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/userMessage/getMessageUser': {
      get: {
        tags: [
          '用户消息',
        ],
        summary: '根据appId和用户uid查询用户信息',
        operationId: 'getMessageUserUsingGET',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'appId',
            in: 'query',
            description: 'appId',
            required: true,
            type: 'integer',
            format: 'int32',
          },
          {
            name: 'caseId',
            in: 'query',
            description: 'caseId',
            required: false,
            type: 'integer',
            format: 'int64',
          },
          {
            name: 'uid',
            in: 'query',
            description: 'uid',
            required: false,
            type: 'integer',
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/MessageUserRes',
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/userMessage/listAgent': {
      get: {
        tags: [
          '用户消息',
        ],
        summary: '查询座席（不附带座席所在队列信息）',
        operationId: 'listAgentUsingGET',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            name: 'queueId',
            in: 'query',
            description: '队列id',
            required: false,
            type: 'integer',
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/AgentRes',
              },
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/userMessage/listAgentQueueByAppId': {
      get: {
        tags: [
          '用户消息',
        ],
        summary: '根据appId查询座席队列列表',
        operationId: 'listAgentQueueByAppIdUsingGET',
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'appId',
            description: 'appId',
            required: true,
            schema: {
              type: 'integer',
              format: 'int32',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/AgentQueueRes',
              },
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/userMessage/listAllAgentQueue': {
      get: {
        tags: [
          '用户消息',
        ],
        summary: '查询所有队列',
        operationId: 'listAllAgentQueueUsingGET',
        produces: [
          '*/*',
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/AgentQueueRes',
              },
            },
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/userMessage/pageMessage': {
      post: {
        tags: [
          '用户消息',
        ],
        summary: '消息分页列表',
        operationId: 'pageMessageUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'messageReq',
            description: 'messageReq',
            required: true,
            schema: {
              $ref: '#/definitions/MessageReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/Page«MessageRes»',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/userMessage/pageProcessingSession': {
      post: {
        tags: [
          '用户消息',
        ],
        summary: '进行中的会话分页列表',
        operationId: 'pageProcessingSessionUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'sessionReq',
            description: 'sessionReq',
            required: true,
            schema: {
              $ref: '#/definitions/SessionReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/Page«SessionRes»',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/userMessage/transfer': {
      post: {
        tags: [
          '用户消息',
        ],
        summary: '会话转接',
        operationId: 'transferUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'transferReq',
            description: 'transferReq',
            required: true,
            schema: {
              $ref: '#/definitions/TransferReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/BooleanRes«string»',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/userMessage/updateAgent': {
      post: {
        tags: [
          '用户消息',
        ],
        summary: '修改座席',
        operationId: 'addAgentQueueUsingPOST_2',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'updateReq',
            description: 'updateReq',
            required: true,
            schema: {
              $ref: '#/definitions/AgentUpdateReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/BooleanRes«string»',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/userMessage/updateAgentQueue': {
      post: {
        tags: [
          '用户消息',
        ],
        summary: '修改座席队列',
        operationId: 'addAgentQueueUsingPOST_1',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'updateReq',
            description: 'updateReq',
            required: true,
            schema: {
              $ref: '#/definitions/AgentQueueUpdateReq',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/BooleanRes«string»',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/userMessage/updateAgentStatus': {
      post: {
        tags: [
          '用户消息',
        ],
        summary: '修改座席状态',
        operationId: 'updateAgentStatusUsingPOST',
        consumes: [
          'application/json',
        ],
        produces: [
          '*/*',
        ],
        parameters: [
          {
            in: 'body',
            name: 'stateUpdateReq',
            description: 'stateUpdateReq',
            required: true,
            schema: {
              $ref: '#/definitions/修改座席状态',
            },
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              $ref: '#/definitions/BooleanRes«string»',
            },
          },
          201: {
            description: 'Created',
          },
          401: {
            description: 'Unauthorized',
          },
          403: {
            description: 'Forbidden',
          },
          404: {
            description: 'Not Found',
          },
        },
        deprecated: false,
      },
    },
    '/visit/add': {
      post: {
        tags: [
          '回访',
        ],
        summary: '新增回访',
        description: 'ResponseEntity $add(cn.edu100.hippo.visit.dto.$add36ApiVisitAddDtoReq)',
        operationId: '$add',
        parameters: [
          {
            in: 'body',
            name: 'param',
            required: true,
            schema: {
              $ref: '#/definitions/$add36ApiVisitAddDtoReq',
            },
          },
        ],
        responses: {
          200: {
            schema: {
              type: 'integer',
              format: 'int64',
            },
          },
        },
        deprecated: false,
      },
    },
    '/visit/page': {
      post: {
        tags: [
          '回访',
        ],
        summary: '分页获取回访列表',
        description: 'ResponseEntity $page(cn.edu100.hippo.visit.dto.$page36ApiVisitQryDtoReq)',
        operationId: '$page',
        parameters: [
          {
            in: 'body',
            name: 'param',
            required: true,
            schema: {
              $ref: '#/definitions/$page36ApiVisitQryDtoReq',
            },
          },
        ],
        responses: {
          200: {
            schema: {
              type: 'object',
              properties: {
                first: {
                  type: 'integer',
                  format: 'int32',
                },
                firstPage: {
                  type: 'boolean',
                },
                last: {
                  type: 'integer',
                  format: 'int32',
                },
                lastPage: {
                  type: 'boolean',
                },
                list: {
                  type: 'array',
                  items: {
                    $ref: '#/definitions/$page36VisitQryResDtoRes',
                  },
                },
                next: {
                  type: 'integer',
                  format: 'int32',
                },
                pageNo: {
                  type: 'integer',
                  format: 'int32',
                },
                pageSize: {
                  type: 'integer',
                  format: 'int64',
                },
                prev: {
                  type: 'integer',
                  format: 'int32',
                },
                total: {
                  type: 'integer',
                  format: 'int64',
                },
              },
            },
          },
        },
        deprecated: false,
      },
    },
  },
  definitions: {
    $add36ApiVisitAddDtoReq: {
      type: 'object',
      required: [
        'content',
        'customer',
        'role',
        'type',
      ],
      properties: {
        role: {
          type: 'integer',
          format: 'int32',
          description: '被回访者角色',
        },
        customer: {
          type: 'integer',
          format: 'int64',
          description: '用户id',
        },
        content: {
          type: 'string',
          description: '回访内容',
        },
        nextVisitTime: {
          type: 'integer',
          format: 'int64',
          description: '下次回访时间',
        },
        type: {
          type: 'integer',
          format: 'int32',
          description: '回访类型，0-拨号回访，1-发短信，2-修改信息日志，3-其他回访，4-微信回访，5-工单回访，6-系统日志',
        },
        phoneRecId: {
          type: 'string',
          description: '通话记录id',
        },
        callResult: {
          type: 'integer',
          format: 'int32',
          description: '通话结果',
        },
        ticketIds: {
          type: 'array',
          description: '工单id',
          items: {
            type: 'integer',
            format: 'int64',
          },
        },
        callType: {
          type: 'string',
          description: '呼叫类型，呼入或呼出',
        },
        callCenter: {
          type: 'integer',
          format: 'int32',
          description: '呼叫中心厂商',
        },
        cno: {
          type: 'string',
          description: '座席号',
        },
        callerId: {
          type: 'string',
          description: '回访客户手机号码',
        },
        extData: {
          type: 'string',
          description: '回访记录的业务数据',
        },
      },
    },
    $add52ApiCaseAddDtoReq: {
      type: 'object',
      required: [
        'phone',
        'source',
      ],
      properties: {
        phone: {
          type: 'string',
          description: '手机号',
        },
        assignUid: {
          type: 'integer',
          format: 'int64',
          description: '销售uid',
        },
        source: {
          type: 'string',
          description: '来源',
        },
        link: {
          type: 'string',
          description: '来源链接',
        },
        landingPage: {
          type: 'string',
          description: '落地页',
        },
        ip: {
          type: 'string',
          description: '来源ip',
        },
        name: {
          type: 'string',
          description: '学生姓名',
        },
        nick: {
          type: 'string',
          description: '学生昵称/英文名',
        },
        parentsName: {
          type: 'string',
          description: '家长姓名',
        },
        parentsRole: {
          type: 'integer',
          format: 'int32',
          description: '家长role，字典：relations',
        },
        country: {
          type: 'string',
          description: '国家',
        },
        province: {
          type: 'string',
          description: '省',
        },
        city: {
          type: 'string',
          description: '市',
        },
        district: {
          type: 'string',
          description: '区',
        },
        qq: {
          type: 'integer',
          format: 'int64',
          description: 'QQ',
        },
        wechat: {
          type: 'string',
          description: '微信',
        },
        sex: {
          type: 'integer',
          format: 'int32',
          description: '性别,字典：sex',
        },
        birthday: {
          type: 'integer',
          format: 'int64',
          description: '生日',
        },
        email: {
          type: 'string',
          description: '邮箱',
        },
        grade: {
          type: 'string',
          description: '年级，字典：grade',
        },
        school: {
          type: 'string',
          description: '学校',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
      },
    },
    $add53ApiCaseVisitAddDtoReq: {
      type: 'object',
      required: [
        'caseId',
        'content',
        'type',
      ],
      properties: {
        caseId: {
          type: 'integer',
          format: 'int64',
          description: '例子Id',
        },
        content: {
          type: 'string',
          description: '回访内容',
        },
        type: {
          type: 'integer',
          format: 'int32',
          description: '回访类型，字典：return_visit_type',
        },
        nextVisitTime: {
          type: 'integer',
          format: 'int64',
          description: '下次回访时间',
        },
        callResult: {
          type: 'integer',
          format: 'int32',
          description: '通话结果，0默认值表示无数据 1无人接听 2接通秒挂 3振铃挂断 4占线 5欠费停机 6不在服务区 7关机 8正常通话,字典：callResult',
        },
        phoneRecId: {
          type: 'string',
          description: '电话记录唯一ID',
        },
        callType: {
          type: 'string',
          description: '呼叫类型，呼入或呼出',
        },
        callCenter: {
          type: 'integer',
          format: 'int32',
          description: '呼叫中心厂商',
        },
        cno: {
          type: 'string',
          description: '座席号',
        },
        callerId: {
          type: 'string',
          description: '回访客户手机号码',
        },
        followState: {
          type: 'integer',
          format: 'int32',
          description: '销售状态，低幼业务字典：tomCasefollowState',
        },
        extData: {
          type: 'string',
          description: '回访记录的业务数据',
        },
        customer: {
          type: 'integer',
          format: 'int64',
          description: '用户id',
        },
        ticketIds: {
          type: 'array',
          description: '工单id',
          items: {
            type: 'integer',
            format: 'int64',
          },
        },
      },
    },
    $add57ApiCaseHandOrderAddDtoReq: {
      type: 'object',
      required: [
        'address',
        'id',
      ],
      properties: {
        id: {
          type: 'integer',
          format: 'int64',
          description: '线索id',
        },
        name: {
          type: 'string',
          description: '学生姓名',
        },
        nick: {
          type: 'string',
          description: '学生昵称/英文名',
        },
        parentsName: {
          type: 'string',
          description: '家长姓名',
        },
        parentsRole: {
          type: 'integer',
          format: 'int32',
          description: '家长role，字典：relations',
        },
        country: {
          type: 'string',
          description: '国家',
        },
        province: {
          type: 'string',
          description: '省',
        },
        city: {
          type: 'string',
          description: '市',
        },
        district: {
          type: 'string',
          description: '区',
        },
        qq: {
          type: 'integer',
          format: 'int64',
          description: 'QQ',
        },
        wechat: {
          type: 'string',
          description: '微信',
        },
        sex: {
          type: 'integer',
          format: 'int32',
          description: '性别,字典：sex',
        },
        birthday: {
          type: 'integer',
          format: 'int64',
          description: '生日',
        },
        email: {
          type: 'string',
          description: '邮箱',
        },
        grade: {
          type: 'string',
          description: '年级，字典：grade',
        },
        school: {
          type: 'string',
          description: '学校',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        address: {
          type: 'string',
          description: '详细地址',
        },
      },
    },
    $assign52ApiCaseAssignDtoReq: {
      type: 'object',
      required: [
        'assignUid',
        'caseIds',
      ],
      properties: {
        caseIds: {
          type: 'array',
          description: '线索id列表',
          items: {
            type: 'integer',
            format: 'int64',
          },
        },
        assignUid: {
          type: 'integer',
          format: 'int64',
          description: '线索跟进人',
        },
      },
    },
    $assign59ApiCaseAssignDtoReq: {
      type: 'object',
      required: [
        'assignUid',
        'caseIds',
      ],
      properties: {
        caseIds: {
          type: 'array',
          description: '线索id列表',
          items: {
            type: 'integer',
            format: 'int64',
          },
        },
        assignUid: {
          type: 'integer',
          format: 'int64',
          description: '线索跟进人',
        },
      },
    },
    $discard59ApiCaseDiscardDtoReq: {
      type: 'object',
      required: [
        'discardReason',
        'ids',
      ],
      properties: {
        ids: {
          type: 'array',
          description: '线索id列表',
          items: {
            type: 'integer',
            format: 'int64',
          },
        },
        discardReason: {
          type: 'integer',
          format: 'int32',
          description: '废弃原因，低幼业务字典：tomDiscardReason',
        },
      },
    },
    $getByCode54CrmCaseSourceDtoRes: {
      type: 'object',
      properties: {
        busiType: {
          type: 'integer',
          format: 'int32',
          description: '业务类型，字典：busiType',
        },
        childNode: {
          type: 'array',
          description: '子渠道',
          items: {
            $ref: '#/definitions/ApiCrmCaseSourceDto',
          },
        },
        code: {
          type: 'string',
          description: '来源码',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建者uid',
        },
        createDate: {
          type: 'integer',
          format: 'int64',
          description: '创建时间',
        },
        delFlag: {
          type: 'integer',
          format: 'int32',
          description: '删除标记',
        },
        description: {
          type: 'string',
          description: '来源描述',
        },
        id: {
          type: 'integer',
          format: 'int64',
          description: 'ID',
        },
        level: {
          type: 'string',
          description: '渠道等级',
        },
        levelCode: {
          type: 'string',
          description: '渠道级别编码 A B C D ',
        },
        levelPoint: {
          type: 'integer',
          format: 'int32',
          description: '渠道得分',
        },
        name: {
          type: 'string',
          description: '来源名称',
        },
        parentId: {
          type: 'integer',
          format: 'int64',
        },
        parentIds: {
          type: 'string',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        sort: {
          type: 'integer',
          format: 'int32',
          description: '来源排序',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新者uid',
        },
        updateDate: {
          type: 'integer',
          format: 'int64',
          description: '更新时间',
        },
        updateMode: {
          type: 'integer',
          format: 'int32',
          description: '更新模式',
        },
      },
    },
    $getById59CrmCaseDtoRes: {
      type: 'object',
      properties: {
        phone: {
          type: 'string',
          description: '手机号',
        },
        phonemd5: {
          type: 'string',
          description: '手机号md5',
        },
        uid: {
          type: 'integer',
          format: 'int64',
          description: 'uid',
        },
        state: {
          type: 'integer',
          format: 'int32',
          description: '状态，字典：caseState',
        },
        followState: {
          type: 'integer',
          format: 'int32',
          description: '销售状态，低幼业务字典：tomCasefollowState',
        },
        planVisitTime: {
          type: 'integer',
          format: 'int64',
          description: '计划回访时间',
        },
        lastVisitTime: {
          type: 'integer',
          format: 'int64',
          description: '最近回访时间',
        },
        lastVisitContent: {
          type: 'string',
          description: '最近回访记录',
        },
        dispatchTime: {
          type: 'integer',
          format: 'int64',
          description: '线索认领/分发时间',
        },
        assignUid: {
          type: 'integer',
          format: 'int64',
          description: '销售uid',
        },
        discardReason: {
          type: 'integer',
          format: 'int32',
          description: '废弃原因，低幼业务字典：tomDiscardReason',
        },
        source: {
          type: 'string',
          description: '来源',
        },
        link: {
          type: 'string',
          description: '来源链接',
        },
        landingPage: {
          type: 'string',
          description: '落地页',
        },
        ip: {
          type: 'string',
          description: '来源ip',
        },
        name: {
          type: 'string',
          description: '学生姓名',
        },
        nick: {
          type: 'string',
          description: '学生昵称/英文名',
        },
        parentsName: {
          type: 'string',
          description: '家长姓名',
        },
        parentsRole: {
          type: 'integer',
          format: 'int32',
          description: '家长role，字典：relations',
        },
        country: {
          type: 'string',
          description: '国家',
        },
        province: {
          type: 'string',
          description: '省',
        },
        city: {
          type: 'string',
          description: '市',
        },
        district: {
          type: 'string',
          description: '区',
        },
        qq: {
          type: 'integer',
          format: 'int64',
          description: 'QQ',
        },
        wechat: {
          type: 'string',
          description: '微信',
        },
        sex: {
          type: 'integer',
          format: 'int32',
          description: '性别,字典：sex',
        },
        birthday: {
          type: 'integer',
          format: 'int64',
          description: '生日',
        },
        email: {
          type: 'string',
          description: '邮箱',
        },
        grade: {
          type: 'string',
          description: '年级，字典：grade',
        },
        school: {
          type: 'string',
          description: '学校',
        },
        busiType: {
          type: 'integer',
          format: 'int32',
          description: '业务类型，字典：busiType',
        },
        age: {
          type: 'integer',
          format: 'int32',
          description: '年龄',
        },
        learnCondition: {
          type: 'integer',
          format: 'int32',
          description: '学习能力情况,字典：CaseCondition',
        },
        id: {
          type: 'integer',
          format: 'int64',
          description: 'ID',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建者uid',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新者uid',
        },
        createDate: {
          type: 'integer',
          format: 'int64',
          description: '创建时间',
        },
        updateDate: {
          type: 'integer',
          format: 'int64',
          description: '更新时间',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        delFlag: {
          type: 'integer',
          format: 'int32',
          description: '删除标记',
        },
        updateMode: {
          type: 'integer',
          format: 'int32',
          description: '更新模式',
        },
        casePreId: {
          type: 'integer',
          format: 'int64',
          description: '准线索ID',
        },
        casePreThirdNick: {
          type: 'string',
          description: '第三方昵称',
        },
        casePreThirdType: {
          type: 'string',
          description: '准线索类型',
        },
        validity: {
          type: 'integer',
          format: 'int32',
          description: '线索有效性，1-有效',
        },
        lifeCycle: {
          type: 'string',
        },
      },
    },
    $getById63CrmCasePreDtoRes: {
      type: 'object',
      properties: {
        busiType: {
          type: 'integer',
          format: 'int32',
          description: '业务类型，字典：busiType',
        },
        caseId: {
          type: 'integer',
          format: 'int64',
          description: '线索id',
        },
        thirdType: {
          type: 'string',
          description: '第三方类型，字典：preCaseThirdType；',
        },
        thirdMainBody: {
          type: 'integer',
          format: 'int32',
          description: '第三方主体，字典：preCaseThirdMainBody；如：三人行一百教育',
        },
        thirdNick: {
          type: 'string',
          description: '第三方昵称',
        },
        thirdAvator: {
          type: 'string',
          description: '第三方头像',
        },
        unionid: {
          type: 'string',
          description: 'unionid',
        },
        phone: {
          type: 'string',
          description: '手机号',
        },
        lastBrowseTime: {
          type: 'integer',
          format: 'int64',
          description: '最近浏览时间',
        },
        lastBrowseContent: {
          type: 'string',
          description: '最近浏览记录',
        },
        link: {
          type: 'string',
          description: '来源链接',
        },
        source: {
          type: 'string',
          description: '来源，推广渠道',
        },
        promotId: {
          type: 'integer',
          format: 'int64',
          description: '推广id',
        },
        promotUserName: {
          type: 'string',
        },
        country: {
          type: 'string',
          description: '国家',
        },
        province: {
          type: 'string',
          description: '省',
        },
        city: {
          type: 'string',
          description: '市',
        },
        district: {
          type: 'string',
          description: '区',
        },
        sex: {
          type: 'integer',
          format: 'int32',
          description: '性别,字典：sex',
        },
        birthday: {
          type: 'integer',
          format: 'int64',
          description: '生日',
        },
        id: {
          type: 'integer',
          format: 'int64',
          description: 'ID',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建者uid',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新者uid',
        },
        createDate: {
          type: 'integer',
          format: 'int64',
          description: '创建时间',
        },
        updateDate: {
          type: 'integer',
          format: 'int64',
          description: '更新时间',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        delFlag: {
          type: 'integer',
          format: 'int32',
          description: '删除标记',
        },
        updateMode: {
          type: 'integer',
          format: 'int32',
          description: '更新模式',
        },
      },
    },
    $getByPhoneAndBusiType52CrmCaseDtoRes: {
      type: 'object',
      properties: {
        phone: {
          type: 'string',
          description: '手机号',
        },
        phonemd5: {
          type: 'string',
          description: '手机号md5',
        },
        uid: {
          type: 'integer',
          format: 'int64',
          description: 'uid',
        },
        state: {
          type: 'integer',
          format: 'int32',
          description: '状态，字典：caseState',
        },
        planVisitTime: {
          type: 'integer',
          format: 'int64',
          description: '计划回访时间',
        },
        lastVisitTime: {
          type: 'integer',
          format: 'int64',
          description: '最近回访时间',
        },
        lastVisitContent: {
          type: 'string',
          description: '最近回访记录',
        },
        dispatchTime: {
          type: 'integer',
          format: 'int64',
          description: '线索认领/分发时间',
        },
        assignUid: {
          type: 'integer',
          format: 'int64',
          description: '销售uid',
        },
        assignName: {
          type: 'string',
        },
        discardReason: {
          type: 'integer',
          format: 'int32',
          description: '废弃原因，低幼业务字典：tomDiscardReason',
        },
        source: {
          type: 'string',
          description: '来源',
        },
        link: {
          type: 'string',
          description: '来源链接',
        },
        landingPage: {
          type: 'string',
          description: '落地页',
        },
        ip: {
          type: 'string',
          description: '来源ip',
        },
        name: {
          type: 'string',
          description: '学生姓名',
        },
        nick: {
          type: 'string',
          description: '学生昵称/英文名',
        },
        parentsName: {
          type: 'string',
          description: '家长姓名',
        },
        parentsRole: {
          type: 'integer',
          format: 'int32',
          description: '家长role，字典：relations',
        },
        country: {
          type: 'string',
          description: '国家',
        },
        province: {
          type: 'string',
          description: '省',
        },
        city: {
          type: 'string',
          description: '市',
        },
        district: {
          type: 'string',
          description: '区',
        },
        qq: {
          type: 'integer',
          format: 'int64',
          description: 'QQ',
        },
        wechat: {
          type: 'string',
          description: '微信',
        },
        sex: {
          type: 'integer',
          format: 'int32',
          description: '性别,字典：sex',
        },
        birthday: {
          type: 'integer',
          format: 'int64',
          description: '生日',
        },
        email: {
          type: 'string',
          description: '邮箱',
        },
        grade: {
          type: 'string',
          description: '年级，字典：grade',
        },
        school: {
          type: 'string',
          description: '学校',
        },
        busiType: {
          type: 'integer',
          format: 'int32',
          description: '业务类型，字典：busiType',
        },
        id: {
          type: 'integer',
          format: 'int64',
          description: 'ID',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建者uid',
        },
        createUserName: {
          type: 'string',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新者uid',
        },
        updateUserName: {
          type: 'string',
        },
        createDate: {
          type: 'integer',
          format: 'int64',
          description: '创建时间',
        },
        updateDate: {
          type: 'integer',
          format: 'int64',
          description: '更新时间',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        delFlag: {
          type: 'integer',
          format: 'int32',
          description: '删除标记',
        },
        updateMode: {
          type: 'integer',
          format: 'int32',
          description: '更新模式',
        },
        age: {
          type: 'integer',
          format: 'int32',
          description: '年龄',
        },
        followState: {
          type: 'integer',
          format: 'int32',
          description: '销售状态，低幼业务字典：tomCasefollowState',
        },
        learnCondition: {
          type: 'integer',
          format: 'int32',
          description: '学习能力情况,字典：CaseCondition',
        },
        validity: {
          type: 'integer',
          format: 'int32',
          description: '线索有效性，1-有效',
        },
        lifeCycle: {
          type: 'string',
        },
        promotId: {
          type: 'integer',
          format: 'int64',
          description: '推荐码',
        },
      },
    },
    $getByPhoneAndBusiType59CrmCaseDtoRes: {
      type: 'object',
      properties: {
        phone: {
          type: 'string',
          description: '手机号',
        },
        phonemd5: {
          type: 'string',
          description: '手机号md5',
        },
        uid: {
          type: 'integer',
          format: 'int64',
          description: 'uid',
        },
        state: {
          type: 'integer',
          format: 'int32',
          description: '状态，字典：caseState',
        },
        followState: {
          type: 'integer',
          format: 'int32',
          description: '销售状态，低幼业务字典：tomCasefollowState',
        },
        planVisitTime: {
          type: 'integer',
          format: 'int64',
          description: '计划回访时间',
        },
        lastVisitTime: {
          type: 'integer',
          format: 'int64',
          description: '最近回访时间',
        },
        lastVisitContent: {
          type: 'string',
          description: '最近回访记录',
        },
        dispatchTime: {
          type: 'integer',
          format: 'int64',
          description: '线索认领/分发时间',
        },
        assignUid: {
          type: 'integer',
          format: 'int64',
          description: '销售uid',
        },
        discardReason: {
          type: 'integer',
          format: 'int32',
          description: '废弃原因，低幼业务字典：tomDiscardReason',
        },
        source: {
          type: 'string',
          description: '来源',
        },
        link: {
          type: 'string',
          description: '来源链接',
        },
        landingPage: {
          type: 'string',
          description: '落地页',
        },
        ip: {
          type: 'string',
          description: '来源ip',
        },
        name: {
          type: 'string',
          description: '学生姓名',
        },
        nick: {
          type: 'string',
          description: '学生昵称/英文名',
        },
        parentsName: {
          type: 'string',
          description: '家长姓名',
        },
        parentsRole: {
          type: 'integer',
          format: 'int32',
          description: '家长role，字典：relations',
        },
        country: {
          type: 'string',
          description: '国家',
        },
        province: {
          type: 'string',
          description: '省',
        },
        city: {
          type: 'string',
          description: '市',
        },
        district: {
          type: 'string',
          description: '区',
        },
        qq: {
          type: 'integer',
          format: 'int64',
          description: 'QQ',
        },
        wechat: {
          type: 'string',
          description: '微信',
        },
        sex: {
          type: 'integer',
          format: 'int32',
          description: '性别,字典：sex',
        },
        birthday: {
          type: 'integer',
          format: 'int64',
          description: '生日',
        },
        email: {
          type: 'string',
          description: '邮箱',
        },
        grade: {
          type: 'string',
          description: '年级，字典：grade',
        },
        school: {
          type: 'string',
          description: '学校',
        },
        busiType: {
          type: 'integer',
          format: 'int32',
          description: '业务类型，字典：busiType',
        },
        age: {
          type: 'integer',
          format: 'int32',
          description: '年龄',
        },
        learnCondition: {
          type: 'integer',
          format: 'int32',
          description: '学习能力情况,字典：CaseCondition',
        },
        id: {
          type: 'integer',
          format: 'int64',
          description: 'ID',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建者uid',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新者uid',
        },
        createDate: {
          type: 'integer',
          format: 'int64',
          description: '创建时间',
        },
        updateDate: {
          type: 'integer',
          format: 'int64',
          description: '更新时间',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        delFlag: {
          type: 'integer',
          format: 'int32',
          description: '删除标记',
        },
        updateMode: {
          type: 'integer',
          format: 'int32',
          description: '更新模式',
        },
        casePreId: {
          type: 'integer',
          format: 'int64',
          description: '准线索ID',
        },
        casePreThirdNick: {
          type: 'string',
          description: '第三方昵称',
        },
        casePreThirdType: {
          type: 'string',
          description: '准线索类型',
        },
        validity: {
          type: 'integer',
          format: 'int32',
          description: '线索有效性，1-有效',
        },
        lifeCycle: {
          type: 'string',
        },
      },
    },
    $list54ApiCrmCaseSourceParamDtoReq: {
      type: 'object',
      required: [
        'parentId',
      ],
      properties: {
        busiType: {
          type: 'integer',
          format: 'int32',
          description: '业务类型，字典：busiType',
        },
        code: {
          type: 'string',
          description: '来源码',
        },
        createBeginDate: {
          type: 'integer',
          format: 'int64',
          description: '创建开始时间',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createEndDate: {
          type: 'integer',
          format: 'int64',
          description: '创建结束时间',
        },
        hasChild: {
          type: 'boolean',
          description: '是否带子节点',
        },
        id: {
          type: 'integer',
          format: 'int64',
          description: '唯一标识',
        },
        name: {
          type: 'string',
        },
        orderBy: {
          type: 'string',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,第N页,默认1',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,每页N条记录,默认20',
        },
        parentId: {
          type: 'integer',
          format: 'int64',
          description: '父节点ID',
        },
        updateBeginDate: {
          type: 'integer',
          format: 'int64',
          description: '更新开始时间',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateEndDate: {
          type: 'integer',
          format: 'int64',
          description: '更新结束时间',
        },
      },
    },
    $list54CrmCaseSourceDtoRes: {
      type: 'object',
      properties: {
        busiType: {
          type: 'integer',
          format: 'int32',
          description: '业务类型，字典：busiType',
        },
        childNode: {
          type: 'array',
          description: '子渠道',
          items: {
            $ref: '#/definitions/ApiCrmCaseSourceDto',
          },
        },
        code: {
          type: 'string',
          description: '来源码',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建者uid',
        },
        createDate: {
          type: 'integer',
          format: 'int64',
          description: '创建时间',
        },
        delFlag: {
          type: 'integer',
          format: 'int32',
          description: '删除标记',
        },
        description: {
          type: 'string',
          description: '来源描述',
        },
        id: {
          type: 'integer',
          format: 'int64',
          description: 'ID',
        },
        level: {
          type: 'string',
          description: '渠道等级',
        },
        levelCode: {
          type: 'string',
          description: '渠道级别编码 A B C D ',
        },
        levelPoint: {
          type: 'integer',
          format: 'int32',
          description: '渠道得分',
        },
        name: {
          type: 'string',
          description: '来源名称',
        },
        parentId: {
          type: 'integer',
          format: 'int64',
        },
        parentIds: {
          type: 'string',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        sort: {
          type: 'integer',
          format: 'int32',
          description: '来源排序',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新者uid',
        },
        updateDate: {
          type: 'integer',
          format: 'int64',
          description: '更新时间',
        },
        updateMode: {
          type: 'integer',
          format: 'int32',
          description: '更新模式',
        },
      },
    },
    $listCrmCaseAppStat63ApiCrmCaseAppStatQryDtoReq: {
      type: 'object',
      properties: {
        unionId: {
          type: 'string',
          description: 'unionId',
        },
        id: {
          type: 'integer',
          format: 'int64',
          description: '唯一标识',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateBeginDate: {
          type: 'integer',
          format: 'int64',
          description: '更新开始时间',
        },
        updateEndDate: {
          type: 'integer',
          format: 'int64',
          description: '更新结束时间',
        },
        createBeginDate: {
          type: 'integer',
          format: 'int64',
          description: '创建开始时间',
        },
        createEndDate: {
          type: 'integer',
          format: 'int64',
          description: '创建结束时间',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,第N页,默认1',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,每页N条记录,默认20',
        },
        orderBy: {
          type: 'string',
        },
      },
    },
    $listCrmCaseAppStat63CrmCaseAppStatDtoRes: {
      type: 'object',
      properties: {
        appId: {
          type: 'string',
          description: 'appId',
        },
        openId: {
          type: 'string',
          description: 'openId',
        },
        appType: {
          type: 'string',
          description: 'app类型',
        },
        appName: {
          type: 'string',
          description: 'app名称',
        },
        authorizeDate: {
          type: 'integer',
          format: 'int64',
          description: '授权时间',
        },
        lasetAccessDate: {
          type: 'integer',
          format: 'int64',
          description: '最后浏览时间',
        },
      },
    },
    $listLessonEventData46TbLessonEventDataDtoRes: {
      type: 'object',
      properties: {
        lessonId: {
          type: 'integer',
          format: 'int64',
        },
        sid: {
          type: 'integer',
          format: 'int64',
        },
        yyuid: {
          type: 'integer',
          format: 'int64',
        },
        eventTime: {
          type: 'integer',
          format: 'int64',
        },
        eventType: {
          type: 'string',
        },
        eventDesc: {
          type: 'string',
        },
        role: {
          type: 'integer',
          format: 'int32',
        },
        id: {
          type: 'integer',
          format: 'int64',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
        },
        createDate: {
          type: 'integer',
          format: 'int64',
        },
        updateDate: {
          type: 'integer',
          format: 'int64',
        },
        remarks: {
          type: 'string',
        },
        delFlag: {
          type: 'integer',
          format: 'int32',
        },
        updateMode: {
          type: 'integer',
          format: 'int32',
        },
      },
    },
    $page36ApiVisitQryDtoReq: {
      type: 'object',
      required: [
        'busiType',
        'customer',
      ],
      properties: {
        busiType: {
          type: 'integer',
          format: 'int32',
          description: '业务类型(低幼传1，k12传3)',
        },
        customer: {
          type: 'integer',
          format: 'int64',
          description: '用户uid',
        },
        type: {
          type: 'integer',
          format: 'int32',
          description: '回访类型',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,第N页,默认1',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,每页N条记录,默认20',
        },
        orderBy: {
          type: 'string',
          description: '排序条件',
        },
      },
    },
    $page36VisitQryResDtoRes: {
      type: 'object',
      properties: {
        busiType: {
          type: 'integer',
          format: 'int32',
          description: '业务类型(低幼传1，k12传3)',
        },
        customer: {
          type: 'integer',
          format: 'int64',
          description: '用户uid',
        },
        customerName: {
          type: 'string',
        },
        content: {
          type: 'string',
          description: '通话内容',
        },
        nextVisitTime: {
          type: 'integer',
          format: 'int64',
          description: '下次回访时间',
        },
        visitor: {
          type: 'integer',
          format: 'int64',
          description: '回访操作人',
        },
        visitorName: {
          type: 'string',
        },
        type: {
          type: 'integer',
          format: 'int32',
          description: '回访类型',
        },
        phoneRecId: {
          type: 'string',
          description: '通话id',
        },
        callResult: {
          type: 'integer',
          format: 'int32',
          description: '通话结果',
        },
        audioUrl: {
          type: 'string',
          description: '录音文件地址',
        },
        ticketTitles: {
          type: 'string',
          description: '工单标题，逗号分隔',
        },
        id: {
          type: 'integer',
          format: 'int64',
          description: 'ID',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建者uid',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新者uid',
        },
        createDate: {
          type: 'integer',
          format: 'int64',
          description: '创建时间',
        },
        updateDate: {
          type: 'integer',
          format: 'int64',
          description: '更新时间',
        },
        extData: {
          type: 'string',
        },
      },
    },
    $page53ApiCaseVisitQryDtoReq: {
      type: 'object',
      properties: {
        caseId: {
          type: 'integer',
          format: 'int64',
          description: '例子Id',
        },
        uid: {
          type: 'integer',
          format: 'int64',
          description: '用户uid',
        },
        busiType: {
          type: 'integer',
          format: 'int32',
          description: '业务类型，字典：busiType',
        },
        type: {
          type: 'integer',
          format: 'int32',
          description: '回访类型，字典：return_visit_type',
        },
        id: {
          type: 'integer',
          format: 'int64',
          description: '唯一标识',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateBeginDate: {
          type: 'integer',
          format: 'int64',
          description: '更新开始时间',
        },
        updateEndDate: {
          type: 'integer',
          format: 'int64',
          description: '更新结束时间',
        },
        createBeginDate: {
          type: 'integer',
          format: 'int64',
          description: '创建开始时间',
        },
        createEndDate: {
          type: 'integer',
          format: 'int64',
          description: '创建结束时间',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,第N页,默认1',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,每页N条记录,默认20',
        },
      },
    },
    $page53CrmCaseVisitDtoRes: {
      type: 'object',
      properties: {
        caseId: {
          type: 'integer',
          format: 'int64',
          description: '例子Id',
        },
        content: {
          type: 'string',
          description: '回访内容',
        },
        assginUid: {
          type: 'integer',
          format: 'int64',
          description: '跟进人',
        },
        assginName: {
          type: 'string',
        },
        type: {
          type: 'integer',
          format: 'int32',
          description: '回访类型，字典：return_visit_type',
        },
        callResult: {
          type: 'integer',
          format: 'int32',
          description: '通话结果，0默认值表示无数据 1无人接听 2接通秒挂 3振铃挂断 4占线 5欠费停机 6不在服务区 7关机 8正常通话,字典：callResult',
        },
        phoneRecId: {
          type: 'string',
          description: '电话记录唯一ID',
        },
        id: {
          type: 'integer',
          format: 'int64',
          description: 'ID',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建者uid',
        },
        createUserName: {
          type: 'string',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新者uid',
        },
        updateUserName: {
          type: 'string',
        },
        createDate: {
          type: 'integer',
          format: 'int64',
          description: '创建时间',
        },
        updateDate: {
          type: 'integer',
          format: 'int64',
          description: '更新时间',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        delFlag: {
          type: 'integer',
          format: 'int32',
          description: '删除标记',
        },
        updateMode: {
          type: 'integer',
          format: 'int32',
          description: '更新模式',
        },
        audioUrl: {
          type: 'string',
          description: '录音URL链接',
        },
        visitor: {
          type: 'integer',
          format: 'int64',
          description: '回访人ID',
        },
        visitorName: {
          type: 'string',
        },
        extData: {
          type: 'string',
          description: '回访记录的业务数据',
        },
        ticketTitles: {
          type: 'string',
          description: '工单title',
        },
      },
    },
    $page54ApiCrmCaseSourceParamDtoReq: {
      type: 'object',
      required: [
        'parentId',
      ],
      properties: {
        busiType: {
          type: 'integer',
          format: 'int32',
          description: '业务类型，字典：busiType',
        },
        code: {
          type: 'string',
          description: '来源码',
        },
        createBeginDate: {
          type: 'integer',
          format: 'int64',
          description: '创建开始时间',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createEndDate: {
          type: 'integer',
          format: 'int64',
          description: '创建结束时间',
        },
        hasChild: {
          type: 'boolean',
          description: '是否带子节点',
        },
        id: {
          type: 'integer',
          format: 'int64',
          description: '唯一标识',
        },
        name: {
          type: 'string',
        },
        orderBy: {
          type: 'string',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,第N页,默认1',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,每页N条记录,默认20',
        },
        parentId: {
          type: 'integer',
          format: 'int64',
          description: '父节点ID',
        },
        updateBeginDate: {
          type: 'integer',
          format: 'int64',
          description: '更新开始时间',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateEndDate: {
          type: 'integer',
          format: 'int64',
          description: '更新结束时间',
        },
      },
    },
    $page54CrmCaseSourceDtoRes: {
      type: 'object',
      properties: {
        busiType: {
          type: 'integer',
          format: 'int32',
          description: '业务类型，字典：busiType',
        },
        childNode: {
          type: 'array',
          description: '子渠道',
          items: {
            $ref: '#/definitions/ApiCrmCaseSourceDto',
          },
        },
        code: {
          type: 'string',
          description: '来源码',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建者uid',
        },
        createDate: {
          type: 'integer',
          format: 'int64',
          description: '创建时间',
        },
        delFlag: {
          type: 'integer',
          format: 'int32',
          description: '删除标记',
        },
        description: {
          type: 'string',
          description: '来源描述',
        },
        id: {
          type: 'integer',
          format: 'int64',
          description: 'ID',
        },
        level: {
          type: 'string',
          description: '渠道等级',
        },
        levelCode: {
          type: 'string',
          description: '渠道级别编码 A B C D ',
        },
        levelPoint: {
          type: 'integer',
          format: 'int32',
          description: '渠道得分',
        },
        name: {
          type: 'string',
          description: '来源名称',
        },
        parentId: {
          type: 'integer',
          format: 'int64',
        },
        parentIds: {
          type: 'string',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        sort: {
          type: 'integer',
          format: 'int32',
          description: '来源排序',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新者uid',
        },
        updateDate: {
          type: 'integer',
          format: 'int64',
          description: '更新时间',
        },
        updateMode: {
          type: 'integer',
          format: 'int32',
          description: '更新模式',
        },
      },
    },
    $page60ApiCrmCaseQryDtoReq: {
      type: 'object',
      required: [
        'busiType',
      ],
      properties: {
        busiType: {
          type: 'integer',
          format: 'int32',
          description: '业务类型，字典：busiType',
        },
        phone: {
          type: 'string',
          description: '手机号',
        },
        state: {
          type: 'integer',
          format: 'int32',
          description: '状态，字典：caseState',
        },
        followState: {
          type: 'integer',
          format: 'int32',
          description: '销售状态，低幼业务字典：tomCasefollowState',
        },
        assignUid: {
          type: 'integer',
          format: 'int64',
          description: '跟进人uid',
        },
        discardReason: {
          type: 'integer',
          format: 'int32',
          description: '废弃原因，低幼业务字典：tomDiscardReason',
        },
        source: {
          type: 'string',
          description: '来源',
        },
        name: {
          type: 'string',
          description: '学生姓名',
        },
        parentsName: {
          type: 'string',
          description: '家长姓名',
        },
        planVisitBeginTime: {
          type: 'integer',
          format: 'int64',
          description: '计划回访开始时间',
        },
        planVisitEndTime: {
          type: 'integer',
          format: 'int64',
          description: '计划回访结束时间',
        },
        lastVisitBeginTime: {
          type: 'integer',
          format: 'int64',
          description: '最近回访开始时间',
        },
        lastVisitEndTime: {
          type: 'integer',
          format: 'int64',
          description: '最近回访结束时间',
        },
        dispatchBeginTime: {
          type: 'integer',
          format: 'int64',
          description: '线索认领/分发开始时间',
        },
        dispatchEndTime: {
          type: 'integer',
          format: 'int64',
          description: '线索认领/分发结束时间',
        },
        assignUids: {
          type: 'array',
          description: '跟进人uid列表',
          items: {
            type: 'integer',
            format: 'int64',
          },
        },
        sources: {
          type: 'array',
          description: '来源列表',
          items: {
            type: 'integer',
            format: 'int64',
          },
        },
        id: {
          type: 'integer',
          format: 'int64',
          description: '唯一标识',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateBeginDate: {
          type: 'integer',
          format: 'int64',
          description: '更新开始时间',
        },
        updateEndDate: {
          type: 'integer',
          format: 'int64',
          description: '更新结束时间',
        },
        createBeginDate: {
          type: 'integer',
          format: 'int64',
          description: '创建开始时间',
        },
        createEndDate: {
          type: 'integer',
          format: 'int64',
          description: '创建结束时间',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,第N页,默认1',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,每页N条记录,默认20',
        },
        orderBy: {
          type: 'string',
        },
      },
    },
    $page60CrmCaseDtoRes: {
      type: 'object',
      properties: {
        phone: {
          type: 'string',
          description: '手机号',
        },
        phonemd5: {
          type: 'string',
          description: '手机号md5',
        },
        uid: {
          type: 'integer',
          format: 'int64',
          description: 'uid',
        },
        state: {
          type: 'integer',
          format: 'int32',
          description: '状态，字典：caseState',
        },
        followState: {
          type: 'integer',
          format: 'int32',
          description: '销售状态，低幼业务字典：tomCasefollowState',
        },
        planVisitTime: {
          type: 'integer',
          format: 'int64',
          description: '计划回访时间',
        },
        lastVisitTime: {
          type: 'integer',
          format: 'int64',
          description: '最近回访时间',
        },
        lastVisitContent: {
          type: 'string',
          description: '最近回访记录',
        },
        dispatchTime: {
          type: 'integer',
          format: 'int64',
          description: '线索认领/分发时间',
        },
        assignUid: {
          type: 'integer',
          format: 'int64',
          description: '销售uid',
        },
        discardReason: {
          type: 'integer',
          format: 'int32',
          description: '废弃原因，低幼业务字典：tomDiscardReason',
        },
        source: {
          type: 'string',
          description: '来源',
        },
        link: {
          type: 'string',
          description: '来源链接',
        },
        landingPage: {
          type: 'string',
          description: '落地页',
        },
        ip: {
          type: 'string',
          description: '来源ip',
        },
        name: {
          type: 'string',
          description: '学生姓名',
        },
        nick: {
          type: 'string',
          description: '学生昵称/英文名',
        },
        parentsName: {
          type: 'string',
          description: '家长姓名',
        },
        parentsRole: {
          type: 'integer',
          format: 'int32',
          description: '家长role，字典：relations',
        },
        country: {
          type: 'string',
          description: '国家',
        },
        province: {
          type: 'string',
          description: '省',
        },
        city: {
          type: 'string',
          description: '市',
        },
        district: {
          type: 'string',
          description: '区',
        },
        qq: {
          type: 'integer',
          format: 'int64',
          description: 'QQ',
        },
        wechat: {
          type: 'string',
          description: '微信',
        },
        sex: {
          type: 'integer',
          format: 'int32',
          description: '性别,字典：sex',
        },
        birthday: {
          type: 'integer',
          format: 'int64',
          description: '生日',
        },
        email: {
          type: 'string',
          description: '邮箱',
        },
        grade: {
          type: 'string',
          description: '年级，字典：grade',
        },
        school: {
          type: 'string',
          description: '学校',
        },
        busiType: {
          type: 'integer',
          format: 'int32',
          description: '业务类型，字典：busiType',
        },
        age: {
          type: 'integer',
          format: 'int32',
          description: '年龄',
        },
        learnCondition: {
          type: 'integer',
          format: 'int32',
          description: '学习能力情况,字典：CaseCondition',
        },
        id: {
          type: 'integer',
          format: 'int64',
          description: 'ID',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建者uid',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新者uid',
        },
        createDate: {
          type: 'integer',
          format: 'int64',
          description: '创建时间',
        },
        updateDate: {
          type: 'integer',
          format: 'int64',
          description: '更新时间',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        delFlag: {
          type: 'integer',
          format: 'int32',
          description: '删除标记',
        },
        updateMode: {
          type: 'integer',
          format: 'int32',
          description: '更新模式',
        },
      },
    },
    $page63ApiCrmCasePreQryDtoReq: {
      type: 'object',
      required: [
        'busiType',
      ],
      properties: {
        busiType: {
          type: 'integer',
          format: 'int32',
          description: '业务类型，字典：busiType',
        },
        phone: {
          type: 'string',
          description: '手机号',
        },
        thirdType: {
          type: 'string',
          description: '第三方类型，，字典：preCaseThirdType',
        },
        thirdMainBody: {
          type: 'integer',
          format: 'int32',
          description: '第三方主体，，字典：preCaseThirdMainBody；如：三人行一百教育',
        },
        thirdNick: {
          type: 'string',
          description: '第三方昵称',
        },
        unionid: {
          type: 'string',
          description: 'unionid',
        },
        sex: {
          type: 'integer',
          format: 'int32',
          description: '性别,字典：sex',
        },
        lastBrowseBeginTime: {
          type: 'integer',
          format: 'int64',
          description: '最近浏览开始时间',
        },
        lastBrowseEndTime: {
          type: 'integer',
          format: 'int64',
          description: '最近浏览开始时间',
        },
        promotIds: {
          type: 'array',
          description: '推广id列表',
          items: {
            type: 'integer',
            format: 'int64',
          },
        },
        sources: {
          type: 'array',
          description: '来源列表',
          items: {
            type: 'integer',
            format: 'int64',
          },
        },
        regionLike: {
          type: 'string',
          description: '地区模糊匹配',
        },
        id: {
          type: 'integer',
          format: 'int64',
          description: '唯一标识',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateBeginDate: {
          type: 'integer',
          format: 'int64',
          description: '更新开始时间',
        },
        updateEndDate: {
          type: 'integer',
          format: 'int64',
          description: '更新结束时间',
        },
        createBeginDate: {
          type: 'integer',
          format: 'int64',
          description: '创建开始时间',
        },
        createEndDate: {
          type: 'integer',
          format: 'int64',
          description: '创建结束时间',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,第N页,默认1',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,每页N条记录,默认20',
        },
        orderBy: {
          type: 'string',
        },
      },
    },
    $page63CrmCasePreDtoRes: {
      type: 'object',
      properties: {
        busiType: {
          type: 'integer',
          format: 'int32',
          description: '业务类型，字典：busiType',
        },
        caseId: {
          type: 'integer',
          format: 'int64',
          description: '线索id',
        },
        thirdType: {
          type: 'string',
          description: '第三方类型，字典：preCaseThirdType；',
        },
        thirdMainBody: {
          type: 'integer',
          format: 'int32',
          description: '第三方主体，字典：preCaseThirdMainBody；如：三人行一百教育',
        },
        thirdNick: {
          type: 'string',
          description: '第三方昵称',
        },
        thirdAvator: {
          type: 'string',
          description: '第三方头像',
        },
        unionid: {
          type: 'string',
          description: 'unionid',
        },
        phone: {
          type: 'string',
          description: '手机号',
        },
        lastBrowseTime: {
          type: 'integer',
          format: 'int64',
          description: '最近浏览时间',
        },
        lastBrowseContent: {
          type: 'string',
          description: '最近浏览记录',
        },
        link: {
          type: 'string',
          description: '来源链接',
        },
        source: {
          type: 'string',
          description: '来源，推广渠道',
        },
        promotId: {
          type: 'integer',
          format: 'int64',
          description: '推广id',
        },
        promotUserName: {
          type: 'string',
        },
        country: {
          type: 'string',
          description: '国家',
        },
        province: {
          type: 'string',
          description: '省',
        },
        city: {
          type: 'string',
          description: '市',
        },
        district: {
          type: 'string',
          description: '区',
        },
        sex: {
          type: 'integer',
          format: 'int32',
          description: '性别,字典：sex',
        },
        birthday: {
          type: 'integer',
          format: 'int64',
          description: '生日',
        },
        id: {
          type: 'integer',
          format: 'int64',
          description: 'ID',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建者uid',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新者uid',
        },
        createDate: {
          type: 'integer',
          format: 'int64',
          description: '创建时间',
        },
        updateDate: {
          type: 'integer',
          format: 'int64',
          description: '更新时间',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        delFlag: {
          type: 'integer',
          format: 'int32',
          description: '删除标记',
        },
        updateMode: {
          type: 'integer',
          format: 'int32',
          description: '更新模式',
        },
      },
    },
    $pageCrmCaseAccessLog63ApiCrmCaseAccessQryDtoReq: {
      type: 'object',
      properties: {
        unionId: {
          type: 'string',
          description: 'unionId',
        },
        openId: {
          type: 'string',
          description: 'openId',
        },
        id: {
          type: 'integer',
          format: 'int64',
          description: '唯一标识',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateBeginDate: {
          type: 'integer',
          format: 'int64',
          description: '更新开始时间',
        },
        updateEndDate: {
          type: 'integer',
          format: 'int64',
          description: '更新结束时间',
        },
        createBeginDate: {
          type: 'integer',
          format: 'int64',
          description: '创建开始时间',
        },
        createEndDate: {
          type: 'integer',
          format: 'int64',
          description: '创建结束时间',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,第N页,默认1',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,每页N条记录,默认20',
        },
        orderBy: {
          type: 'string',
        },
      },
    },
    $pageCrmCaseAccessLog63CrmCaseAccessLogDtoRes: {
      type: 'object',
      properties: {
        res: {
          type: 'string',
          description: '资源路径',
        },
        resType: {
          type: 'string',
          description: '资源类型',
        },
        startAccessDate: {
          type: 'integer',
          format: 'int64',
          description: '浏览开始时间',
        },
        endAccessDate: {
          type: 'integer',
          format: 'int64',
          description: '浏览结束时间',
        },
        accessDuration: {
          type: 'integer',
          format: 'int32',
          description: '浏览时长',
        },
        terminal: {
          type: 'string',
          description: '终端机型',
        },
      },
    },
    $register52ApiCaseRegisterDtoReq: {
      type: 'object',
      required: [
        'id',
      ],
      properties: {
        id: {
          type: 'integer',
          format: 'int64',
          description: '线索id',
        },
      },
    },
    $updateBaseInfo52ApiCaseUpdateDtoReq: {
      type: 'object',
      required: [
        'id',
      ],
      properties: {
        id: {
          type: 'integer',
          format: 'int64',
          description: '线索id',
        },
        phone: {
          type: 'string',
          description: '手机号',
        },
        name: {
          type: 'string',
          description: '学生姓名',
        },
        nick: {
          type: 'string',
          description: '学生昵称/英文名',
        },
        parentsName: {
          type: 'string',
          description: '家长姓名',
        },
        parentsRole: {
          type: 'integer',
          format: 'int32',
          description: '家长role，字典：relations',
        },
        country: {
          type: 'string',
          description: '国家',
        },
        province: {
          type: 'string',
          description: '省',
        },
        city: {
          type: 'string',
          description: '市',
        },
        district: {
          type: 'string',
          description: '区',
        },
        qq: {
          type: 'integer',
          format: 'int64',
          description: 'QQ',
        },
        wechat: {
          type: 'string',
          description: '微信',
        },
        sex: {
          type: 'integer',
          format: 'int32',
          description: '性别,字典：sex',
        },
        birthday: {
          type: 'integer',
          format: 'int64',
          description: '生日',
        },
        email: {
          type: 'string',
          description: '邮箱',
        },
        grade: {
          type: 'string',
          description: '年级，字典：grade',
        },
        school: {
          type: 'string',
          description: '学校',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
      },
    },
    AbnormalLessonReq: {
      type: 'object',
      properties: {
        courseId: {
          type: 'integer',
          format: 'int64',
          description: '课程id',
        },
        createBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '创建开始时间',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createEndDate: {
          type: 'string',
          format: 'date-time',
          description: '创建结束时间',
        },
        endTime: {
          type: 'string',
          format: 'date-time',
          description: '课节结束时间',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,第N页,默认1',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,每页N条记录,默认20',
        },
        phone: {
          type: 'string',
          description: '手机号',
        },
        sourceType: {
          type: 'integer',
          format: 'int32',
          description: '课节类型,1:正式 2::试听',
        },
        startTime: {
          type: 'string',
          format: 'date-time',
          description: '课节开始时间',
        },
        studentUid: {
          type: 'integer',
          format: 'int64',
          description: '学生uid',
        },
        updateBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '更新开始时间',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateEndDate: {
          type: 'string',
          format: 'date-time',
          description: '更新结束时间',
        },
      },
      title: 'AbnormalLessonReq',
    },
    AbnormalOrderReq: {
      type: 'object',
      properties: {
        createBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '创建开始时间',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createEndDate: {
          type: 'string',
          format: 'date-time',
          description: '创建结束时间',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,第N页,默认1',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,每页N条记录,默认20',
        },
        phone: {
          type: 'string',
        },
        uid: {
          type: 'integer',
          format: 'int64',
        },
        updateBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '更新开始时间',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateEndDate: {
          type: 'string',
          format: 'date-time',
          description: '更新结束时间',
        },
      },
      title: 'AbnormalOrderReq',
    },
    AcceptReq: {
      type: 'object',
      properties: {
        agentUid: {
          type: 'integer',
          format: 'int64',
          description: '坐席uid',
        },
        appId: {
          type: 'integer',
          format: 'int32',
          description: 'appid，字典：zhiyuApp',
        },
        uid: {
          type: 'integer',
          format: 'int64',
          description: '学生/老师uid',
        },
      },
      title: 'AcceptReq',
    },
    AcceptRes: {
      type: 'object',
      properties: {
        appId: {
          type: 'integer',
          format: 'int32',
          description: '应用ID',
        },
        id: {
          type: 'integer',
          format: 'int64',
          description: 'sessionid',
        },
        segmentId: {
          type: 'integer',
          format: 'int64',
          description: '段id',
        },
        sessionCode: {
          type: 'string',
          description: 'sessionCode',
        },
        sid: {
          type: 'integer',
          format: 'int64',
          description: '群id',
        },
      },
      title: 'AcceptRes',
    },
    AgentAddReq: {
      type: 'object',
      required: [
        'appId',
        'maxSessionNum',
        'queueId',
        'uid',
      ],
      properties: {
        appId: {
          type: 'integer',
          format: 'int32',
          description: 'appid，字典：zhiyuApp',
        },
        maxSessionNum: {
          type: 'integer',
          format: 'int32',
          description: '最大session数（最小值:1）',
          minimum: 1.0,
          exclusiveMinimum: false,
        },
        queueId: {
          type: 'integer',
          format: 'int64',
          description: '座席队列id',
        },
        uid: {
          type: 'integer',
          format: 'int64',
          description: 'uid',
        },
      },
      title: 'AgentAddReq',
    },
    AgentAndQueuesRes: {
      type: 'object',
      properties: {
        agentQueueResList: {
          type: 'array',
          description: '座席信息集合',
          items: {
            $ref: '#/definitions/AgentQueueRes',
          },
        },
        id: {
          type: 'integer',
          format: 'int64',
        },
        maxSessionNum: {
          type: 'integer',
          format: 'int32',
          description: '最大session数',
        },
        name: {
          type: 'string',
          description: '姓名',
        },
        status: {
          type: 'integer',
          format: 'int32',
          description: '状态，字典：agentStatus',
        },
        uid: {
          type: 'integer',
          format: 'int64',
          description: 'uid',
        },
      },
      title: 'AgentAndQueuesRes',
    },
    AgentQueueAddReq: {
      type: 'object',
      required: [
        'appId',
        'dispatchType',
        'name',
      ],
      properties: {
        appId: {
          type: 'integer',
          format: 'int32',
          description: 'appId，字典：zhiyuApp',
        },
        dispatchType: {
          type: 'integer',
          format: 'int32',
          description: '分配方式，1 - 随机',
        },
        name: {
          type: 'string',
          description: '名称',
        },
      },
      title: 'AgentQueueAddReq',
    },
    AgentQueueRes: {
      type: 'object',
      properties: {
        appId: {
          type: 'integer',
          format: 'int32',
          description: 'appId,字典：zhiyuApp',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createDate: {
          type: 'string',
          format: 'date-time',
          description: '创建时间',
        },
        createUserName: {
          type: 'string',
          description: '创建人名字',
        },
        dispatchType: {
          type: 'integer',
          format: 'int32',
          description: '分发类型，字典：agentQueueDispatchType',
        },
        id: {
          type: 'integer',
          format: 'int64',
        },
        name: {
          type: 'string',
          description: '名称',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        sid: {
          type: 'integer',
          format: 'int64',
          description: '组id',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateDate: {
          type: 'string',
          format: 'date-time',
          description: '更新时间',
        },
        updateUserName: {
          type: 'string',
          description: '更新人名字',
        },
      },
      title: 'AgentQueueRes',
    },
    AgentQueueUpdateReq: {
      type: 'object',
      required: [
        'id',
      ],
      properties: {
        dispatchType: {
          type: 'integer',
          format: 'int32',
          description: '分配方式，1 - 随机',
        },
        id: {
          type: 'integer',
          format: 'int64',
          description: '座席队列id',
        },
        name: {
          type: 'string',
          description: '名称',
        },
      },
      title: 'AgentQueueUpdateReq',
    },
    AgentRes: {
      type: 'object',
      properties: {
        agentQueueRes: {
          description: '座席信息',
          $ref: '#/definitions/AgentQueueRes',
        },
        appId: {
          type: 'integer',
          format: 'int32',
          description: 'appId,字典：zhiyuApp',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createDate: {
          type: 'string',
          format: 'date-time',
          description: '创建时间',
        },
        createUserName: {
          type: 'string',
          description: '创建人名字',
        },
        id: {
          type: 'integer',
          format: 'int64',
        },
        maxSessionNum: {
          type: 'integer',
          format: 'int32',
          description: '最大session数',
        },
        name: {
          type: 'string',
          description: '姓名',
        },
        queueId: {
          type: 'integer',
          format: 'int64',
          description: '座席队列id',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        status: {
          type: 'integer',
          format: 'int32',
          description: '状态，字典：agentStatus',
        },
        uid: {
          type: 'integer',
          format: 'int64',
          description: 'uid',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateDate: {
          type: 'string',
          format: 'date-time',
          description: '更新时间',
        },
        updateUserName: {
          type: 'string',
          description: '更新人名字',
        },
      },
      title: 'AgentRes',
    },
    AgentTreeRes: {
      type: 'object',
      properties: {
        children: {
          type: 'array',
          description: '子结构',
          items: {
            $ref: '#/definitions/AgentTreeRes',
          },
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createDate: {
          type: 'string',
          format: 'date-time',
          description: '创建时间',
        },
        createUserName: {
          type: 'string',
          description: '创建人名字',
        },
        id: {
          type: 'integer',
          format: 'int64',
          description: '业务线id(字典：zhiyuApp) / 队列id / 座席id',
        },
        mainName: {
          type: 'string',
          description: '业务线名称/队列名称/座席uid',
        },
        mainType: {
          type: 'integer',
          format: 'int32',
          description: '类型： 0-业务线，1-队列，2-座席',
        },
        maxSessionNum: {
          type: 'integer',
          format: 'int32',
          description: '最大session数',
        },
        name: {
          type: 'string',
          description: '关联人姓名',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        status: {
          type: 'integer',
          format: 'int32',
          description: '座席状态，字典：agentStatus',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateDate: {
          type: 'string',
          format: 'date-time',
          description: '更新时间',
        },
        updateUserName: {
          type: 'string',
          description: '更新人名字',
        },
      },
      title: 'AgentTreeRes',
    },
    AgentUpdateReq: {
      type: 'object',
      required: [
        'id',
      ],
      properties: {
        id: {
          type: 'integer',
          format: 'int64',
          description: 'id',
        },
        maxSessionNum: {
          type: 'integer',
          format: 'int32',
          description: '最大session数（最小值:1）',
          minimum: 1.0,
          exclusiveMinimum: false,
        },
        status: {
          type: 'integer',
          format: 'int32',
          description: '座席状态',
          minimum: 0.0,
          exclusiveMinimum: false,
        },
      },
      title: 'AgentUpdateReq',
    },
    ApiCrmCaseSourceDto: {
      type: 'object',
      properties: {
        busiType: {
          type: 'integer',
          format: 'int32',
          description: '业务类型，字典：busiType',
        },
        childNode: {
          type: 'array',
          description: '子渠道',
          items: {
            $ref: '#/definitions/ApiCrmCaseSourceDto',
          },
        },
        code: {
          type: 'string',
          description: '来源码',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建者uid',
        },
        createDate: {
          type: 'integer',
          format: 'int64',
          description: '创建时间',
        },
        delFlag: {
          type: 'integer',
          format: 'int32',
          description: '删除标记',
        },
        description: {
          type: 'string',
          description: '来源描述',
        },
        id: {
          type: 'integer',
          format: 'int64',
          description: 'ID',
        },
        level: {
          type: 'string',
          description: '渠道等级',
        },
        levelCode: {
          type: 'string',
          description: '渠道级别编码 A B C D ',
        },
        levelPoint: {
          type: 'integer',
          format: 'int32',
          description: '渠道得分',
        },
        name: {
          type: 'string',
          description: '来源名称',
        },
        parentId: {
          type: 'integer',
          format: 'int64',
        },
        parentIds: {
          type: 'string',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        sort: {
          type: 'integer',
          format: 'int32',
          description: '来源排序',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新者uid',
        },
        updateDate: {
          type: 'integer',
          format: 'int64',
          description: '更新时间',
        },
        updateMode: {
          type: 'integer',
          format: 'int32',
          description: '更新模式',
        },
      },
    },
    AuditRes: {
      type: 'object',
      properties: {
        result: {
          type: 'boolean',
          description: '操作结果',
        },
      },
      title: 'AuditRes',
    },
    Base64UploadReq: {
      type: 'object',
      properties: {
        base64: {
          type: 'string',
        },
        fileName: {
          type: 'string',
        },
      },
      title: 'Base64UploadReq',
    },
    BooleanRes: {
      type: 'object',
      properties: {
        data: {
          type: 'object',
        },
        result: {
          type: 'boolean',
        },
      },
      title: 'BooleanRes',
    },
    'BooleanRes«List«long»»': {
      type: 'object',
      properties: {
        data: {
          type: 'array',
          items: {
            type: 'integer',
            format: 'int64',
          },
        },
        result: {
          type: 'boolean',
        },
      },
      title: 'BooleanRes«List«long»»',
    },
    'BooleanRes«int»': {
      type: 'object',
      properties: {
        data: {
          type: 'integer',
          format: 'int32',
        },
        result: {
          type: 'boolean',
        },
      },
      title: 'BooleanRes«int»',
    },
    'BooleanRes«long»': {
      type: 'object',
      properties: {
        data: {
          type: 'integer',
          format: 'int64',
        },
        result: {
          type: 'boolean',
        },
      },
      title: 'BooleanRes«long»',
    },
    'BooleanRes«string»': {
      type: 'object',
      properties: {
        data: {
          type: 'string',
        },
        result: {
          type: 'boolean',
        },
      },
      title: 'BooleanRes«string»',
    },
    'BooleanRes«磨耳朵详情 model»': {
      type: 'object',
      properties: {
        data: {
          $ref: '#/definitions/磨耳朵详情 model',
        },
        result: {
          type: 'boolean',
        },
      },
      title: 'BooleanRes«磨耳朵详情 model»',
    },
    'BooleanRes«订单退费前检查结果 model»': {
      type: 'object',
      properties: {
        data: {
          $ref: '#/definitions/订单退费前检查结果 model',
        },
        result: {
          type: 'boolean',
        },
      },
      title: 'BooleanRes«订单退费前检查结果 model»',
    },
    BuyedCourseInfoRes: {
      type: 'object',
      properties: {
        availableAccountNum: {
          type: 'integer',
          format: 'int32',
          description: '剩余课时数',
        },
        buyedCnt: {
          type: 'integer',
          format: 'int32',
          description: '购买课时',
        },
        buyedCompencnt: {
          type: 'integer',
          format: 'int32',
          description: '已购补偿课时',
        },
        courseDeadLine: {
          type: 'string',
          format: 'date-time',
          description: '课程有效结期束时间',
        },
        courseId: {
          type: 'integer',
          format: 'int64',
          description: '课程ID',
        },
        doneCnt: {
          type: 'integer',
          format: 'int32',
          description: '已完成课时',
        },
        expiredCnt: {
          type: 'integer',
          format: 'int32',
          description: '有效期已过课时',
        },
        giftCnt: {
          type: 'integer',
          format: 'int32',
          description: '赠送课时',
        },
        giftCompenCnt: {
          type: 'integer',
          format: 'int32',
          description: '赠送补偿课时',
        },
        goodsId: {
          type: 'integer',
          format: 'int64',
          description: '商品ID',
        },
        name: {
          type: 'string',
          description: '课程名',
        },
        orderCode: {
          type: 'string',
          description: '订单号',
        },
        orderDeadLine: {
          type: 'string',
          format: 'date-time',
          description: '订单有效期结束时间',
        },
        orderId: {
          type: 'integer',
          format: 'int64',
          description: '订单ID',
        },
        refundTotalCnt: {
          type: 'integer',
          format: 'int32',
          description: '退费订单已退费课时=退费（购买+赠送+补偿购买+补偿赠送）',
        },
        state: {
          type: 'integer',
          format: 'int32',
          description: '课程账本状态，0 默认 10 冻结 20 已退款',
        },
      },
      title: 'BuyedCourseInfoRes',
    },
    CaseConditionRes: {
      type: 'object',
      properties: {
        hasHandOver: {
          type: 'boolean',
          description: '是否正课交接',
        },
        hasOrdered: {
          type: 'boolean',
          description: '是否已成单',
        },
        hasSetPlan: {
          type: 'boolean',
          description: '是否设置学习计划',
        },
      },
      title: 'CaseConditionRes',
    },
    CaseDiscardReq: {
      type: 'object',
      properties: {
        discardReason: {
          type: 'integer',
          format: 'int32',
          description: '废弃原因，低幼业务字典：tomDiscardReason',
        },
        ids: {
          type: 'array',
          description: '线索id列表',
          items: {
            type: 'integer',
            format: 'int64',
          },
        },
      },
      title: 'CaseDiscardReq',
    },
    CaseUpdateReq: {
      type: 'object',
      properties: {
        birthday: {
          type: 'string',
          format: 'date-time',
          description: '生日',
        },
        city: {
          type: 'string',
          description: '市',
          minLength: 0,
          maxLength: 64,
        },
        country: {
          type: 'string',
          description: '国家',
          minLength: 0,
          maxLength: 64,
        },
        district: {
          type: 'string',
          description: '区',
          minLength: 0,
          maxLength: 64,
        },
        email: {
          type: 'string',
          description: '邮箱',
          minLength: 0,
          maxLength: 64,
        },
        grade: {
          type: 'string',
          description: '年级，字典：grade',
          minLength: 0,
          maxLength: 64,
        },
        id: {
          type: 'integer',
          format: 'int64',
          description: '线索id',
        },
        name: {
          type: 'string',
          description: '学生姓名',
          minLength: 0,
          maxLength: 64,
        },
        nick: {
          type: 'string',
          description: '学生昵称/英文名',
          minLength: 0,
          maxLength: 64,
        },
        parentsName: {
          type: 'string',
          description: '家长姓名',
          minLength: 0,
          maxLength: 64,
        },
        parentsRole: {
          type: 'integer',
          format: 'int32',
          description: '家长role，字典：relations',
        },
        phone: {
          type: 'string',
          description: '手机号',
          minLength: 0,
          maxLength: 32,
        },
        province: {
          type: 'string',
          description: '省',
          minLength: 0,
          maxLength: 64,
        },
        qq: {
          type: 'integer',
          format: 'int64',
          description: 'QQ',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        school: {
          type: 'string',
          description: '学校',
          minLength: 0,
          maxLength: 128,
        },
        sex: {
          type: 'integer',
          format: 'int32',
          description: '性别,字典：sex',
        },
        weWorkRemark: {
          type: 'string',
          description: '企业微信备注',
        },
        wechat: {
          type: 'string',
          description: '微信',
          minLength: 0,
          maxLength: 32,
        },
      },
      title: 'CaseUpdateReq',
    },
    ChapterAddReq: {
      type: 'object',
      required: [
        'parentId',
        'textBookId',
        'textChapterEnName',
      ],
      properties: {
        chapterLevel: {
          type: 'integer',
          format: 'int32',
          description: '第一级为leven，第二级为unit，第三级为课序',
        },
        code: {
          type: 'string',
          description: '根目录到本节点的序号串，格式 00-00-00  所有前缀父id-前缀本身id,不同级别，前缀不一样',
        },
        ext: {
          type: 'string',
          description: '教学内容扩展字段',
        },
        parentId: {
          type: 'integer',
          format: 'int64',
          description: '父节点，如果为第一层节点，则为0',
        },
        parentIds: {
          type: 'string',
          description: '父节点Ids',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        seq: {
          type: 'integer',
          format: 'int32',
          description: '同一个level上的序号',
        },
        textBookId: {
          type: 'integer',
          format: 'int64',
          description: '教材id',
        },
        textChapterChName: {
          type: 'string',
          description: '中文名',
        },
        textChapterEnName: {
          type: 'string',
          description: '英文名',
        },
      },
      title: 'ChapterAddReq',
      description: '章节新增 model',
    },
    ChapterGetRes: {
      type: 'object',
      properties: {
        editVersion: {
          description: '编辑版本',
          $ref: '#/definitions/TbChapterDto',
        },
        publishVersion: {
          description: '发布版本',
          $ref: '#/definitions/TbChapterDto',
        },
      },
      title: 'ChapterGetRes',
      description: '章节 model',
    },
    ChapterRes: {
      type: 'object',
      properties: {
        chapterLevel: {
          type: 'integer',
          format: 'int32',
          description: '第一级为leven，第二级为unit，第三级为课序',
        },
        code: {
          type: 'string',
          description: '根目录到本节点的序号串，格式 00-00-00  所有前缀父id-前缀本身id,不同级别，前缀不一样',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createDate: {
          type: 'string',
          format: 'date-time',
          description: '创建时间',
        },
        createUserName: {
          type: 'string',
          description: '创建人名字',
        },
        ext: {
          type: 'string',
          description: '教学内容扩展字段',
        },
        id: {
          type: 'integer',
          format: 'int64',
        },
        modifyFlag: {
          type: 'integer',
          format: 'int32',
          description: '修改标志，方便前端比较审核',
        },
        nodes: {
          type: 'array',
          description: '下级节点',
          items: {
            $ref: '#/definitions/ChapterRes',
          },
        },
        parentChName: {
          type: 'string',
          description: '父级节点中文名',
        },
        parentEnName: {
          type: 'string',
          description: '父级节点英文名',
        },
        parentId: {
          type: 'integer',
          format: 'int64',
          description: '父节点，如果为第一层节点，则为0',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        seq: {
          type: 'integer',
          format: 'int32',
          description: '同一个level上的序号',
        },
        standardClasses: {
          type: 'array',
          description: '课序列表',
          items: {
            $ref: '#/definitions/StandardClassRes',
          },
        },
        textBookId: {
          type: 'integer',
          format: 'int64',
          description: '教材id',
        },
        textChapterChName: {
          type: 'string',
          description: '中文名',
        },
        textChapterEnName: {
          type: 'string',
          description: '英文名',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateDate: {
          type: 'string',
          format: 'date-time',
          description: '更新时间',
        },
        updateUserName: {
          type: 'string',
          description: '更新人名字',
        },
        verifyBy: {
          type: 'integer',
          format: 'int64',
          description: '审核人',
        },
        verifyDate: {
          type: 'string',
          format: 'date-time',
          description: '审核时间',
        },
      },
      title: 'ChapterRes',
      description: '章节 model',
    },
    ChapterUpdateContentReq: {
      type: 'object',
      properties: {
        ext: {
          type: 'string',
          description: '教学内容扩展字段',
        },
      },
      title: 'ChapterUpdateContentReq',
      description: '章节内容更新 model',
    },
    ChapterUpdateReq: {
      type: 'object',
      required: [
        'textBookId',
      ],
      properties: {
        chapterLevel: {
          type: 'integer',
          format: 'int32',
          description: '第一级为leven，第二级为unit，第三级为课序',
        },
        code: {
          type: 'string',
          description: '根目录到本节点的序号串，格式 00-00-00  所有前缀父id-前缀本身id,不同级别，前缀不一样',
        },
        ext: {
          type: 'string',
          description: '教学内容扩展字段',
        },
        parentId: {
          type: 'integer',
          format: 'int64',
          description: '父节点，如果为第一层节点，则为0',
        },
        parentIds: {
          type: 'string',
          description: '父节点Ids',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        seq: {
          type: 'integer',
          format: 'int32',
          description: '同一个level上的序号',
        },
        textBookId: {
          type: 'integer',
          format: 'int64',
          description: '教材id',
          minimum: 1.0,
          exclusiveMinimum: false,
        },
        textChapterChName: {
          type: 'string',
          description: '中文名',
        },
        textChapterEnName: {
          type: 'string',
          description: '英文名',
        },
      },
      title: 'ChapterUpdateReq',
      description: '章节修改 model',
    },
    ClientReportReq: {
      type: 'object',
      properties: {
        pageNo: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,第N页,默认1',
          minimum: 1.0,
          exclusiveMinimum: false,
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,每页N条记录,默认20',
          minimum: 1.0,
          exclusiveMinimum: false,
        },
        phone: {
          type: 'string',
          description: '手机号',
        },
        queryBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '查询开始时间',
        },
        queryEndDate: {
          type: 'string',
          format: 'date-time',
          description: '查询结束时间',
        },
        type: {
          type: 'integer',
          format: 'int32',
          description: '日志上传的原因类型uploadReasonType, 0-主动上报、1-自动拉取、2-错误触发，字典:uploadReasonType',
        },
        uid: {
          type: 'integer',
          format: 'int64',
          description: '日志对应的uid',
        },
      },
      title: 'ClientReportReq',
      description: '日志上传记录列表查询 model',
    },
    ClientReportRes: {
      type: 'object',
      properties: {
        appName: {
          type: 'string',
          description: 'APP名称',
        },
        bizId: {
          type: 'string',
          description: '业务标识',
        },
        bizType: {
          type: 'string',
          description: '业务类型',
        },
        channel: {
          type: 'string',
          description: '发行渠道',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createDate: {
          type: 'string',
          format: 'date-time',
          description: '创建时间',
        },
        createUserName: {
          type: 'string',
          description: '创建人名字',
        },
        deviceId: {
          type: 'string',
          description: '设备ID',
        },
        deviceModel: {
          type: 'string',
          description: '设备型号',
        },
        feedback: {
          type: 'string',
          description: '反馈内容',
        },
        fileSize: {
          type: 'string',
          description: '文件大小',
        },
        fileUrl: {
          type: 'string',
          description: '文件URL',
        },
        id: {
          type: 'integer',
          format: 'int64',
        },
        macAddr: {
          type: 'string',
          description: 'MacAddress',
        },
        netType: {
          type: 'string',
          description: '网络类型：wifi, 4g',
        },
        osType: {
          type: 'integer',
          format: 'int32',
          description: 'OS类型uploadOSType：0-Android、1-iOS、2-WinPhone、3-其它，字典:uploadOSType',
        },
        osVersion: {
          type: 'string',
          description: 'OS版本',
        },
        phone: {
          type: 'string',
          description: '手机号码',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        reportTime: {
          type: 'string',
          format: 'date-time',
          description: '上报时间',
        },
        subType: {
          type: 'integer',
          format: 'int32',
          description: '子类型',
        },
        type: {
          type: 'integer',
          format: 'int32',
          description: '日志上传的原因类型uploadReasonType: 0-主动上报、1-自动拉取、2-错误触发，字典:uploadReasonType',
        },
        uid: {
          type: 'integer',
          format: 'int64',
          description: '文件uid',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateDate: {
          type: 'string',
          format: 'date-time',
          description: '更新时间',
        },
        updateUserName: {
          type: 'string',
          description: '更新人名字',
        },
        versionCode: {
          type: 'integer',
          format: 'int32',
          description: '版本号',
        },
        versionName: {
          type: 'string',
          description: '版本名称',
        },
      },
      title: 'ClientReportRes',
      description: '日志上传记录 model',
    },
    CloseReq: {
      type: 'object',
      required: [
        'byAgentUid',
        'sessionId',
      ],
      properties: {
        byAgentUid: {
          type: 'integer',
          format: 'int64',
          description: '接待人uid',
        },
        sessionId: {
          type: 'integer',
          format: 'int64',
          description: '会话id',
        },
      },
      title: 'CloseReq',
    },
    ColumnMeta: {
      type: 'object',
      title: 'ColumnMeta',
    },
    CourseStandarClassRes: {
      type: 'object',
      properties: {
        leftStandardClassNum: {
          type: 'integer',
          format: 'int32',
          description: '剩余课序数',
        },
      },
      title: 'CourseStandarClassRes',
      description: '课程剩余课序 model',
    },
    CourseWareMaterialWrap: {
      type: 'object',
      properties: {
        addrUrl: {
          type: 'string',
        },
        name: {
          type: 'string',
        },
      },
      title: 'CourseWareMaterialWrap',
    },
    CoursewareMaterialAddReq: {
      type: 'object',
      properties: {
        addrUrl: {
          type: 'string',
          description: '课件资源地址url',
        },
        addrUrlList: {
          type: 'array',
          description: '课件资源地址url 列表,前端保存时使用批量保存',
          items: {
            $ref: '#/definitions/CourseWareMaterialWrap',
          },
        },
        name: {
          type: 'string',
          description: '资源名称',
        },
        standardClassId: {
          type: 'integer',
          format: 'int64',
          description: '课序id',
          minimum: 1.0,
          exclusiveMinimum: false,
        },
        status: {
          type: 'integer',
          format: 'int32',
          description: '状态1 发布 10 下线',
          minimum: 1.0,
          exclusiveMinimum: false,
        },
        type: {
          type: 'integer',
          format: 'int32',
          description: '类型',
        },
      },
      title: 'CoursewareMaterialAddReq',
      description: '课程资源新增 model',
    },
    CoursewareMaterialReq: {
      type: 'object',
      properties: {
        createBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '创建开始时间',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createEndDate: {
          type: 'string',
          format: 'date-time',
          description: '创建结束时间',
        },
        name: {
          type: 'string',
          description: '资源名称',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,第N页,默认1',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,每页N条记录,默认20',
        },
        standardClassId: {
          type: 'integer',
          format: 'int64',
          description: '课序id',
          minimum: 1.0,
          exclusiveMinimum: false,
        },
        status: {
          type: 'integer',
          format: 'int32',
          description: '状态1 发布 10 下线',
          minimum: 1.0,
          exclusiveMinimum: false,
        },
        type: {
          type: 'integer',
          format: 'int32',
          description: '类型',
        },
        updateBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '更新开始时间',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateEndDate: {
          type: 'string',
          format: 'date-time',
          description: '更新结束时间',
        },
      },
      title: 'CoursewareMaterialReq',
      description: '课程资源查询 model',
    },
    CoursewareMaterialRes: {
      type: 'object',
      properties: {
        addrUrl: {
          type: 'string',
          description: '课件资源地址url',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createDate: {
          type: 'string',
          format: 'date-time',
          description: '创建时间',
        },
        createUserName: {
          type: 'string',
          description: '创建人名字',
        },
        id: {
          type: 'integer',
          format: 'int64',
        },
        name: {
          type: 'string',
          description: '资源名称',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        standardClassId: {
          type: 'integer',
          format: 'int64',
          description: '课序id',
        },
        status: {
          type: 'integer',
          format: 'int32',
          description: '状态1 发布 10 下线',
        },
        type: {
          type: 'integer',
          format: 'int32',
          description: '类型',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateDate: {
          type: 'string',
          format: 'date-time',
          description: '更新时间',
        },
        updateUserName: {
          type: 'string',
          description: '更新人名字',
        },
      },
      title: 'CoursewareMaterialRes',
      description: '课程资源返回 model',
    },
    CoursewarePptAddReq: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          description: '课件名称',
        },
        pptKey: {
          type: 'string',
          description: 'ppt课件pptKey',
        },
      },
      title: 'CoursewarePptAddReq',
      description: 'ppt课件新增对象',
    },
    CoursewarePptAddRes: {
      type: 'object',
      properties: {
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createDate: {
          type: 'string',
          format: 'date-time',
          description: '创建时间',
        },
        createUserName: {
          type: 'string',
          description: '创建人名字',
        },
        id: {
          type: 'integer',
          format: 'int64',
        },
        name: {
          type: 'string',
          description: '课件名称',
        },
        pptKey: {
          type: 'string',
          description: 'ppt课件pptKey',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateDate: {
          type: 'string',
          format: 'date-time',
          description: '更新时间',
        },
        updateUserName: {
          type: 'string',
          description: '更新人名字',
        },
      },
      title: 'CoursewarePptAddRes',
      description: 'ppt课件新增返回对象',
    },
    CoursewarePptPageReq: {
      type: 'object',
      properties: {
        createBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '创建开始时间',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createEndDate: {
          type: 'string',
          format: 'date-time',
          description: '创建结束时间',
        },
        id: {
          type: 'integer',
          format: 'int64',
          description: '课件ID',
        },
        name: {
          type: 'string',
          description: '课件名称',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,第N页,默认1',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,每页N条记录,默认20',
        },
        status: {
          type: 'integer',
          format: 'int32',
          description: '课件状态',
        },
        updateBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '更新开始时间',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateEndDate: {
          type: 'string',
          format: 'date-time',
          description: '更新结束时间',
        },
      },
      title: 'CoursewarePptPageReq',
      description: 'ppt课件分页请求对象',
    },
    CoursewarePptPageRes: {
      type: 'object',
      properties: {
        cover: {
          type: 'string',
          description: 'ppt课件封面',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createDate: {
          type: 'string',
          format: 'date-time',
          description: '创建时间',
        },
        createUserName: {
          type: 'string',
          description: '创建人名字',
        },
        id: {
          type: 'integer',
          format: 'int64',
        },
        name: {
          type: 'string',
          description: '课件名称',
        },
        pptKey: {
          type: 'string',
          description: 'ppt课件pptKey',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        status: {
          type: 'integer',
          format: 'int32',
          description: '课件状态',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateDate: {
          type: 'string',
          format: 'date-time',
          description: '更新时间',
        },
        updateUserName: {
          type: 'string',
          description: '更新人名字',
        },
      },
      title: 'CoursewarePptPageRes',
      description: 'ppt课件分页返回对象',
    },
    CoursewarePptRes: {
      type: 'object',
      properties: {
        cover: {
          type: 'string',
          description: 'ppt课件封面',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createDate: {
          type: 'string',
          format: 'date-time',
          description: '创建时间',
        },
        createUserName: {
          type: 'string',
          description: '创建人名字',
        },
        id: {
          type: 'integer',
          format: 'int64',
        },
        name: {
          type: 'string',
          description: '课件名称',
        },
        pptKey: {
          type: 'string',
          description: 'ppt课件pptKey',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        status: {
          type: 'integer',
          format: 'int32',
          description: '课件状态',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateDate: {
          type: 'string',
          format: 'date-time',
          description: '更新时间',
        },
        updateUserName: {
          type: 'string',
          description: '更新人名字',
        },
      },
      title: 'CoursewarePptRes',
      description: 'ppt课件对象',
    },
    CoursewareXmlAddReq: {
      type: 'object',
      properties: {
        addrUrl: {
          type: 'string',
          description: '课件url地址',
        },
        name: {
          type: 'string',
          description: '课件名称',
        },
      },
      title: 'CoursewareXmlAddReq',
      description: 'xml课件新增对象',
    },
    CoursewareXmlAddRes: {
      type: 'object',
      properties: {
        addrUrl: {
          type: 'string',
          description: '课件url地址',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createDate: {
          type: 'string',
          format: 'date-time',
          description: '创建时间',
        },
        createUserName: {
          type: 'string',
          description: '创建人名字',
        },
        id: {
          type: 'integer',
          format: 'int64',
        },
        name: {
          type: 'string',
          description: '课件名称',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateDate: {
          type: 'string',
          format: 'date-time',
          description: '更新时间',
        },
        updateUserName: {
          type: 'string',
          description: '更新人名字',
        },
      },
      title: 'CoursewareXmlAddRes',
      description: 'xml课件新增返回对象',
    },
    CoursewareXmlPageReq: {
      type: 'object',
      properties: {
        createBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '创建开始时间',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createEndDate: {
          type: 'string',
          format: 'date-time',
          description: '创建结束时间',
        },
        id: {
          type: 'integer',
          format: 'int64',
          description: '课件ID',
        },
        name: {
          type: 'string',
          description: '课件名称',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,第N页,默认1',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,每页N条记录,默认20',
        },
        updateBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '更新开始时间',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateEndDate: {
          type: 'string',
          format: 'date-time',
          description: '更新结束时间',
        },
      },
      title: 'CoursewareXmlPageReq',
      description: 'xml课件分页请求对象',
    },
    CoursewareXmlPageRes: {
      type: 'object',
      properties: {
        addrUrl: {
          type: 'string',
          description: '课件url地址',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createDate: {
          type: 'string',
          format: 'date-time',
          description: '创建时间',
        },
        createUserName: {
          type: 'string',
          description: '创建人名字',
        },
        id: {
          type: 'integer',
          format: 'int64',
        },
        name: {
          type: 'string',
          description: '课件名称',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateDate: {
          type: 'string',
          format: 'date-time',
          description: '更新时间',
        },
        updateUserName: {
          type: 'string',
          description: '更新人名字',
        },
      },
      title: 'CoursewareXmlPageRes',
      description: 'xml课件分页返回对象',
    },
    CoursewareXmlRes: {
      type: 'object',
      properties: {
        addrUrl: {
          type: 'string',
          description: '课件url地址',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createDate: {
          type: 'string',
          format: 'date-time',
          description: '创建时间',
        },
        createUserName: {
          type: 'string',
          description: '创建人名字',
        },
        id: {
          type: 'integer',
          format: 'int64',
        },
        name: {
          type: 'string',
          description: '课件名称',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateDate: {
          type: 'string',
          format: 'date-time',
          description: '更新时间',
        },
        updateUserName: {
          type: 'string',
          description: '更新人名字',
        },
      },
      title: 'CoursewareXmlRes',
      description: 'xml课件对象',
    },
    CrmCaseReq: {
      type: 'object',
      properties: {
        assignEmpty: {
          type: 'boolean',
          description: '跟进人是否为空 ',
        },
        assignUid: {
          type: 'integer',
          format: 'int64',
          description: '跟进人uid',
        },
        assignUids: {
          type: 'array',
          description: '跟进人uid列表',
          items: {
            type: 'integer',
            format: 'int64',
          },
        },
        busiType: {
          type: 'integer',
          format: 'int32',
          description: '业务类型，字典：busiType',
        },
        createBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '创建开始时间',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createEndDate: {
          type: 'string',
          format: 'date-time',
          description: '创建结束时间',
        },
        discardReason: {
          type: 'integer',
          format: 'int32',
          description: '废弃原因，低幼业务字典：tomDiscardReason',
        },
        dispatchBeginTime: {
          type: 'string',
          format: 'date-time',
          description: '线索认领/分发开始时间',
        },
        dispatchEndTime: {
          type: 'string',
          format: 'date-time',
          description: '线索认领/分发结束时间',
        },
        followState: {
          type: 'integer',
          format: 'int32',
          description: '销售状态，低幼业务字典：tomCasefollowState',
        },
        lastVisitBeginTime: {
          type: 'string',
          format: 'date-time',
          description: '最近回访开始时间',
        },
        lastVisitEndTime: {
          type: 'string',
          format: 'date-time',
          description: '最近回访结束时间',
        },
        name: {
          type: 'string',
          description: '学生姓名',
        },
        orderBy: {
          type: 'string',
          description: '排序 ',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,第N页,默认1',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,每页N条记录,默认20',
        },
        parentsName: {
          type: 'string',
          description: '家长姓名',
        },
        phone: {
          type: 'string',
          description: '手机号',
        },
        planVisitBeginTime: {
          type: 'string',
          format: 'date-time',
          description: '计划回访开始时间',
        },
        planVisitEndTime: {
          type: 'string',
          format: 'date-time',
          description: '计划回访结束时间',
        },
        source: {
          type: 'string',
          description: '来源',
        },
        sources: {
          type: 'array',
          description: '来源列表',
          items: {
            type: 'string',
          },
        },
        state: {
          type: 'integer',
          format: 'int32',
          description: '状态，字典：caseState',
        },
        uid: {
          type: 'integer',
          format: 'int64',
          description: 'uid',
        },
        updateBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '更新开始时间',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateEndDate: {
          type: 'string',
          format: 'date-time',
          description: '更新结束时间',
        },
      },
      title: 'CrmCaseReq',
    },
    CrmCaseRes: {
      type: 'object',
      properties: {
        age: {
          type: 'integer',
          format: 'int32',
        },
        assignName: {
          type: 'string',
        },
        assignUid: {
          type: 'integer',
          format: 'int64',
        },
        assistantName: {
          type: 'string',
          description: '规划师名称',
        },
        assistantUid: {
          type: 'integer',
          format: 'int64',
          description: '规划师uid',
        },
        birthday: {
          type: 'string',
          format: 'date-time',
        },
        busiType: {
          type: 'integer',
          format: 'int32',
        },
        casePreId: {
          type: 'integer',
          format: 'int64',
        },
        casePreThirdNick: {
          type: 'string',
        },
        casePreThirdType: {
          type: 'string',
        },
        city: {
          type: 'string',
        },
        country: {
          type: 'string',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createDate: {
          type: 'string',
          format: 'date-time',
          description: '创建时间',
        },
        createUserName: {
          type: 'string',
        },
        discardReason: {
          type: 'integer',
          format: 'int32',
        },
        dispatchTime: {
          type: 'string',
          format: 'date-time',
        },
        district: {
          type: 'string',
        },
        email: {
          type: 'string',
        },
        followState: {
          type: 'integer',
          format: 'int32',
        },
        grade: {
          type: 'string',
        },
        id: {
          type: 'integer',
          format: 'int64',
        },
        ip: {
          type: 'string',
        },
        ipAddressDetail: {
          type: 'string',
        },
        landingPage: {
          type: 'string',
        },
        lastVisitContent: {
          type: 'string',
        },
        lastVisitTime: {
          type: 'string',
          format: 'date-time',
          description: '最近回访时间',
        },
        learnCondition: {
          type: 'integer',
          format: 'int32',
        },
        lifeCycle: {
          type: 'string',
        },
        link: {
          type: 'string',
        },
        location: {
          type: 'string',
        },
        locationDetail: {
          type: 'string',
        },
        name: {
          type: 'string',
        },
        nick: {
          type: 'string',
        },
        parentsName: {
          type: 'string',
        },
        parentsRole: {
          type: 'integer',
          format: 'int32',
        },
        phone: {
          type: 'string',
        },
        phonemd5: {
          type: 'string',
        },
        planVisitTime: {
          type: 'string',
          format: 'date-time',
        },
        promotId: {
          type: 'integer',
          format: 'int64',
        },
        promoterName: {
          type: 'string',
        },
        province: {
          type: 'string',
        },
        qq: {
          type: 'integer',
          format: 'int64',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        school: {
          type: 'string',
        },
        sex: {
          type: 'integer',
          format: 'int32',
        },
        source: {
          type: 'string',
        },
        state: {
          type: 'integer',
          format: 'int32',
        },
        uid: {
          type: 'integer',
          format: 'int64',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateDate: {
          type: 'string',
          format: 'date-time',
          description: '更新时间',
        },
        updateUserName: {
          type: 'string',
        },
        validity: {
          type: 'integer',
          format: 'int32',
        },
        weWorkRemark: {
          type: 'string',
          description: '企业微信备注',
        },
        wechat: {
          type: 'string',
        },
      },
      title: 'CrmCaseRes',
    },
    CrmCaseSourceAddReq: {
      type: 'object',
      required: [
        'description',
        'name',
        'parentId',
        'sort',
      ],
      properties: {
        busiType: {
          type: 'integer',
          format: 'int32',
          description: '业务类型 1 低幼 3 k12',
        },
        code: {
          type: 'string',
          description: '渠道来源码',
        },
        description: {
          type: 'string',
          description: '渠道描述',
        },
        level: {
          type: 'string',
          description: '渠道级别',
        },
        levelCode: {
          type: 'string',
          description: '渠道级别编码',
        },
        levelPoint: {
          type: 'integer',
          format: 'int32',
          description: '渠道级别得分',
        },
        name: {
          type: 'string',
          description: '渠道名称',
        },
        parentId: {
          type: 'integer',
          format: 'int64',
          description: '渠道父级id',
        },
        promotId: {
          type: 'integer',
          format: 'int64',
          description: '推广人id',
        },
        sort: {
          type: 'integer',
          format: 'int32',
          description: '渠道来源排序',
        },
      },
      title: 'CrmCaseSourceAddReq',
    },
    CrmCaseSourceDelReq: {
      type: 'object',
      properties: {
        id: {
          type: 'integer',
          format: 'int64',
          description: '渠道id',
        },
      },
      title: 'CrmCaseSourceDelReq',
    },
    CrmCaseSourceEditReq: {
      type: 'object',
      required: [
        'busiType',
        'description',
        'name',
        'parentId',
        'sort',
      ],
      properties: {
        busiType: {
          type: 'integer',
          format: 'int32',
          description: '业务类型,1为低幼，3为k12   k12初高中、低幼英语，字典:busiType',
        },
        code: {
          type: 'string',
          description: '渠道来源码',
        },
        description: {
          type: 'string',
          description: '渠道描述',
        },
        id: {
          type: 'integer',
          format: 'int64',
          description: '渠道id',
        },
        level: {
          type: 'string',
          description: '渠道级别',
        },
        levelCode: {
          type: 'string',
          description: '渠道级别编码',
        },
        levelPoint: {
          type: 'integer',
          format: 'int32',
          description: '渠道级别得分',
        },
        name: {
          type: 'string',
          description: '渠道名称',
        },
        parentId: {
          type: 'integer',
          format: 'int64',
          description: '渠道父级id',
        },
        promotId: {
          type: 'integer',
          format: 'int64',
          description: '推广人id',
        },
        sort: {
          type: 'integer',
          format: 'int32',
          description: '渠道来源排序',
        },
      },
      title: 'CrmCaseSourceEditReq',
    },
    CrmCaseSourceReq: {
      type: 'object',
      properties: {
        code: {
          type: 'string',
          description: '渠道来源码',
        },
        description: {
          type: 'string',
          description: '渠道描述',
        },
        name: {
          type: 'string',
          description: '渠道名称',
        },
        orderBy: {
          type: 'integer',
          format: 'int32',
          description: '渠道按时间排序类型：1：升序 ',
        },
        sort: {
          type: 'integer',
          format: 'int32',
          description: '来源排序',
        },
      },
      title: 'CrmCaseSourceReq',
    },
    CrmCaseSourceRes: {
      type: 'object',
      properties: {
        busiType: {
          type: 'integer',
          format: 'int32',
          description: '业务类型:1为低幼，3为k12',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createDate: {
          type: 'string',
          format: 'date-time',
          description: '创建时间',
        },
        createUserName: {
          type: 'string',
          description: '创建人名字',
        },
        description: {
          type: 'string',
          description: '描述',
        },
        level: {
          type: 'string',
          description: '渠道等级',
        },
        levelCode: {
          type: 'string',
          description: '渠道级别编码',
        },
        levelPoint: {
          type: 'integer',
          format: 'int32',
          description: '渠道级别得分',
        },
        parentId: {
          type: 'integer',
          format: 'int64',
          description: '渠道父级id',
        },
        parentIds: {
          type: 'string',
          description: '父子级别关联',
        },
        promotId: {
          type: 'integer',
          format: 'int64',
          description: '推广人id',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        sort: {
          type: 'integer',
          format: 'int32',
          description: '排序',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateDate: {
          type: 'string',
          format: 'date-time',
          description: '更新时间',
        },
        updateUserName: {
          type: 'string',
          description: '更新人名字',
        },
      },
      title: 'CrmCaseSourceRes',
    },
    FAQ管理入参: {
      type: 'object',
      properties: {
        bizType: {
          type: 'integer',
          format: 'int32',
          description: '使用场景分类，业务分类, 1:快捷回复，2：文件库',
        },
        useObjs: {
          type: 'array',
          description: '使用者、队列id或者uid',
          items: {
            type: 'integer',
            format: 'int64',
          },
        },
        useType: {
          type: 'integer',
          format: 'int32',
          description: '使用类型1：队列，2：个人',
        },
      },
      title: 'FAQ管理入参',
    },
    FAQ管理出参: {
      type: 'object',
      properties: {
        content: {
          type: 'string',
          description: '内容',
        },
        faqId: {
          type: 'integer',
          format: 'int64',
          description: '类别ID',
        },
        isTop: {
          type: 'integer',
          format: 'int32',
          description: '是否置顶(1/0)',
        },
        mediaType: {
          type: 'integer',
          format: 'int32',
          description: '媒体类型：1 文本，2,图片，3：ppt，4,：xlsx，5：word，6：mp4',
        },
        nodes: {
          type: 'array',
          description: '类别ID',
          items: {
            $ref: '#/definitions/FAQ管理出参',
          },
        },
      },
      title: 'FAQ管理出参',
    },
    Faq内容置顶请求入参: {
      type: 'object',
      properties: {
        faqId: {
          type: 'integer',
          format: 'int64',
          description: '要置顶的faqid',
        },
      },
      title: 'Faq内容置顶请求入参',
    },
    Faq删除传入对象: {
      type: 'object',
      properties: {
        faqId: {
          type: 'integer',
          format: 'int64',
          description: 'FaqId',
        },
        useObjs: {
          type: 'array',
          description: '使用者、队列id或者uid，如果不传（useType和useObjs)，就是删除子节点',
          items: {
            type: 'integer',
            format: 'int64',
          },
        },
        useType: {
          type: 'integer',
          format: 'int32',
          description: '使用类型1：队列，2：个人',
        },
      },
      title: 'Faq删除传入对象',
    },
    Faq新增分类请求对象: {
      type: 'object',
      properties: {
        bizType: {
          type: 'integer',
          format: 'int32',
          description: '使用场景分类，业务分类, 1:快捷回复，2：文件库',
        },
        content: {
          type: 'string',
          description: '新增的具体内容：如果是快捷回复就是文本：text，如果是文件的话就是json串，json格式：{name:图片的标题,thumbnail:封面（mp4才要）,size:大小 ,link:链接,ext:后缀名（比如：png，mp4）}',
        },
        mediaType: {
          type: 'integer',
          format: 'int32',
          description: '媒体类型：1 文本，2,图片，3：ppt，4,：xlsx，5：word，6：mp4',
        },
        useObjs: {
          type: 'array',
          description: '队列id或者个人id',
          items: {
            type: 'integer',
            format: 'int64',
          },
        },
        useType: {
          type: 'integer',
          format: 'int32',
          description: '使用类型1：队列，2：个人',
        },
      },
      title: 'Faq新增分类请求对象',
    },
    Faq新增请求对象: {
      type: 'object',
      properties: {
        bizType: {
          type: 'integer',
          format: 'int32',
          description: '使用场景分类，业务分类, 1:快捷回复，2：文件库',
        },
        content: {
          type: 'string',
          description: '新增的具体内容：如果是快捷回复就是文本：text，如果是文件的话就是json串，json格式：{name:图片的标题,thumbnail:封面（mp4才要）,size:大小 ,link:链接,ext:后缀名（比如：png，mp4）}',
        },
        mediaType: {
          type: 'integer',
          format: 'int32',
          description: '媒体类型：1 文本，2,图片，3：ppt，4,：xlsx，5：word，6：mp4',
        },
        parentId: {
          type: 'integer',
          format: 'int64',
          description: '所属的父节点parentId',
        },
        useObjs: {
          type: 'array',
          description: '使用者、队列id或者uid',
          items: {
            type: 'integer',
            format: 'int64',
          },
        },
        useType: {
          type: 'integer',
          format: 'int32',
          description: '使用类型1：队列，2：个人',
        },
      },
      title: 'Faq新增请求对象',
    },
    Faq更新请求对象: {
      type: 'object',
      properties: {
        bizType: {
          type: 'integer',
          format: 'int32',
          description: '使用场景分类，业务分类, 1:快捷回复，2：文件库',
        },
        content: {
          type: 'string',
          description: '新增的具体内容：如果是快捷回复就是文本：text，如果是文件的话就是json串，json格式：{name:图片的标题,thumbnail:封面（mp4才要）,size:大小 ,link:链接,ext:后缀名（比如：png，mp4）}',
        },
        faqId: {
          type: 'integer',
          format: 'int64',
          description: 'Faq的Id',
        },
        mediaType: {
          type: 'integer',
          format: 'int32',
          description: '媒体类型：1 文本，2,图片，3：ppt，4,：xlsx，5：word，6：mp4',
        },
        parentId: {
          type: 'integer',
          format: 'int64',
          description: '所属的父节点parentId',
        },
      },
      title: 'Faq更新请求对象',
    },
    Faq置顶请求对象: {
      type: 'object',
      properties: {
        faqId: {
          type: 'integer',
          format: 'int64',
          description: 'faqId',
        },
        isTop: {
          type: 'integer',
          format: 'int32',
          description: '置顶标志：0：不置顶，1：置顶',
        },
        useObjs: {
          type: 'array',
          description: '队列id',
          items: {
            type: 'integer',
            format: 'int64',
          },
        },
        useType: {
          type: 'integer',
          format: 'int32',
          description: '使用类型1：队列，2：个人',
        },
      },
      title: 'Faq置顶请求对象',
    },
    FromRows: {
      type: 'object',
      properties: {
        from: {
          type: 'integer',
          format: 'int32',
        },
        rows: {
          type: 'integer',
          format: 'int32',
        },
      },
      title: 'FromRows',
    },
    GoodsAddReq: {
      type: 'object',
      required: [
        'busiType',
        'goodsName',
        'goodsProductList',
        'payPeriod',
      ],
      properties: {
        attachment: {
          type: 'string',
          description: '附件',
        },
        busiType: {
          type: 'integer',
          format: 'int32',
          description: '业务类型, k12初高中、低幼英语，字典:busiType',
        },
        goodsName: {
          type: 'string',
          description: '商品名称,长度',
          minLength: 1,
          maxLength: 128,
        },
        goodsProductList: {
          type: 'array',
          description: '课程列表',
          items: {
            $ref: '#/definitions/GoodsProductReq',
          },
        },
        id: {
          type: 'integer',
          format: 'int64',
          description: '商品ID',
        },
        keyWord: {
          type: 'string',
          description: '关键字',
        },
        payPeriod: {
          type: 'integer',
          format: 'int32',
          description: '支付有效期，单位：分钟',
          minimum: 0.0,
          exclusiveMinimum: false,
        },
      },
      title: 'GoodsAddReq',
    },
    GoodsApproveReq: {
      type: 'object',
      required: [
        'approveMsg',
        'approveResult',
      ],
      properties: {
        approveMsg: {
          type: 'string',
          description: '审核意见',
        },
        approveResult: {
          type: 'integer',
          format: 'int32',
          description: '审核结果 [10：通过，20：不通过]',
        },
      },
      title: 'GoodsApproveReq',
      description: '商品审核 model',
    },
    GoodsPageInfoAddReq: {
      type: 'object',
      properties: {
        appId: {
          type: 'string',
          description: '展示appid,tomabc轻商城：tomabcLiteMall',
          minLength: 0,
          maxLength: 20,
        },
        context: {
          type: 'string',
          description: '展示内容，json格式',
        },
        endTime: {
          type: 'string',
          format: 'date-time',
          description: '结束时间',
        },
        goodsIds: {
          type: 'array',
          description: 'goodsId',
          items: {
            type: 'integer',
            format: 'int64',
          },
        },
        pageId: {
          type: 'integer',
          format: 'int64',
          description: '商品页id',
        },
        pageTitle: {
          type: 'string',
          description: '商品页标题',
        },
        startTime: {
          type: 'string',
          format: 'date-time',
          description: '开始时间',
        },
      },
      title: 'GoodsPageInfoAddReq',
      description: '商品页新增 model',
    },
    GoodsPageInfoReq: {
      type: 'object',
      properties: {
        appId: {
          type: 'string',
          description: '展示appid,tomabc轻商城：tomabcLiteMall',
          minLength: 0,
          maxLength: 20,
        },
        createBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '创建开始时间',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createEndDate: {
          type: 'string',
          format: 'date-time',
          description: '创建结束时间',
        },
        endTimeFrom: {
          type: 'string',
          format: 'date-time',
          description: '结束时间 开始',
        },
        endTimeTo: {
          type: 'string',
          format: 'date-time',
          description: '结束时间 结束',
        },
        pageId: {
          type: 'integer',
          format: 'int64',
          description: '商品页id',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,第N页,默认1',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,每页N条记录,默认20',
        },
        pageTitle: {
          type: 'string',
          description: '商品页标题',
        },
        startTimeFrom: {
          type: 'string',
          format: 'date-time',
          description: '开始时间 开始',
        },
        startTimeTo: {
          type: 'string',
          format: 'date-time',
          description: '开始时间 结束',
        },
        updateBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '更新开始时间',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateEndDate: {
          type: 'string',
          format: 'date-time',
          description: '更新结束时间',
        },
      },
      title: 'GoodsPageInfoReq',
      description: '商品页查询 model',
    },
    GoodsPageInfoRes: {
      type: 'object',
      properties: {
        appId: {
          type: 'string',
          description: '展示appid,tomabc轻商城：tomabcLiteMall',
          minLength: 0,
          maxLength: 20,
        },
        context: {
          type: 'string',
          description: '商品页内容前端展示样式,json 格式',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createDate: {
          type: 'string',
          format: 'date-time',
          description: '创建时间',
        },
        createUserName: {
          type: 'string',
          description: '创建人名字',
        },
        endTime: {
          type: 'string',
          format: 'date-time',
          description: '结束时间',
        },
        goodsList: {
          type: 'array',
          description: '商品列表',
          items: {
            $ref: '#/definitions/商品 model',
          },
        },
        id: {
          type: 'integer',
          format: 'int64',
        },
        pageId: {
          type: 'integer',
          format: 'int64',
          description: '商品页id',
        },
        pageTitle: {
          type: 'string',
          description: '商品页标题',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        startTime: {
          type: 'string',
          format: 'date-time',
          description: '开始时间',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateDate: {
          type: 'string',
          format: 'date-time',
          description: '更新时间',
        },
        updateUserName: {
          type: 'string',
          description: '更新人名字',
        },
      },
      title: 'GoodsPageInfoRes',
      description: '轻商城商品页查询 model',
    },
    GoodsProductReq: {
      type: 'object',
      required: [
        'giftNum',
        'num',
        'oriPrice',
        'price',
        'productId',
        'sort',
        'type',
        'usePeriod',
      ],
      properties: {
        convertibleCourses: {
          type: 'array',
          description: '可开课程列表',
          items: {
            $ref: '#/definitions/TbConvertibleCourseReq',
          },
        },
        giftNum: {
          type: 'integer',
          format: 'int32',
          description: '赠送数量，当type=4，即为协议时，不需要传值',
        },
        id: {
          type: 'integer',
          format: 'int64',
          description: 'id',
        },
        num: {
          type: 'integer',
          format: 'int32',
          description: '购买数量，当type=4，即为协议时，不需要传值',
        },
        oriPrice: {
          type: 'number',
          description: '原价，当type=4，即为协议时，不需要传值',
        },
        price: {
          type: 'number',
          description: '优惠价，当type=4，即为协议时，不需要传值',
        },
        productId: {
          type: 'integer',
          format: 'int64',
          description: '产品（课程、协议）Id',
        },
        sort: {
          type: 'integer',
          format: 'int64',
          description: '序号，当type=4，即为协议时，不需要传值',
        },
        type: {
          type: 'integer',
          format: 'int32',
          description: '产品类型，3-课程，4-协议',
        },
        usePeriod: {
          type: 'integer',
          format: 'int32',
          description: '课时有效期，当type=4，即为协议时，不需要传值',
        },
      },
      title: 'GoodsProductReq',
    },
    GoodsProductRes: {
      type: 'object',
      properties: {
        convertibleCourses: {
          type: 'array',
          description: '可开课程列表',
          items: {
            $ref: '#/definitions/TbConvertibleCourseDto',
          },
        },
        giftNum: {
          type: 'integer',
          format: 'int32',
          description: '赠送数量',
        },
        id: {
          type: 'integer',
          format: 'int64',
          description: 'Id',
        },
        name: {
          type: 'string',
          description: '课程名称',
        },
        num: {
          type: 'integer',
          format: 'int32',
          description: '购买数量',
        },
        oriPrice: {
          type: 'number',
          description: '原价',
        },
        price: {
          type: 'number',
          description: '优惠价',
        },
        productId: {
          type: 'integer',
          format: 'int64',
          description: '课程Id',
        },
        type: {
          type: 'integer',
          format: 'int32',
          description: '产品类型 字典：productType',
        },
        usePeriod: {
          type: 'integer',
          format: 'int32',
          description: '课时有效期',
        },
      },
      title: 'GoodsProductRes',
    },
    IpInfoRes: {
      type: 'object',
      properties: {
        city: {
          type: 'string',
          description: '城市',
        },
        country: {
          type: 'string',
          description: '国家',
        },
        ip: {
          type: 'string',
          description: 'Ip地址',
        },
        isp: {
          type: 'string',
          description: '运营商',
        },
        region: {
          type: 'string',
          description: '省份',
        },
      },
      title: 'IpInfoRes',
    },
    KnowledgeAddReq: {
      type: 'object',
      properties: {
        grade: {
          type: 'integer',
          format: 'int32',
        },
        name: {
          type: 'string',
        },
        parentId: {
          type: 'integer',
          format: 'int64',
        },
        subject: {
          type: 'integer',
          format: 'int32',
        },
      },
      title: 'KnowledgeAddReq',
      description: '知识点新增请求对象',
    },
    KnowledgeAddRes: {
      type: 'object',
      properties: {
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createDate: {
          type: 'string',
          format: 'date-time',
          description: '创建时间',
        },
        createUserName: {
          type: 'string',
          description: '创建人名字',
        },
        grade: {
          type: 'integer',
          format: 'int32',
          description: '年级',
        },
        id: {
          type: 'integer',
          format: 'int64',
        },
        name: {
          type: 'string',
          description: '知识点名称',
        },
        parentId: {
          type: 'integer',
          format: 'int64',
          description: '父节点ID',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        status: {
          type: 'integer',
          format: 'int32',
          description: '状态',
        },
        subject: {
          type: 'integer',
          format: 'int32',
          description: '科目',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateDate: {
          type: 'string',
          format: 'date-time',
          description: '更新时间',
        },
        updateUserName: {
          type: 'string',
          description: '更新人名字',
        },
      },
      title: 'KnowledgeAddRes',
      description: '知识点新增请求返回对象',
    },
    KnowledgePageReq: {
      type: 'object',
      properties: {
        createBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '创建开始时间',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createEndDate: {
          type: 'string',
          format: 'date-time',
          description: '创建结束时间',
        },
        grade: {
          type: 'integer',
          format: 'int32',
          description: '年级',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,第N页,默认1',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,每页N条记录,默认20',
        },
        status: {
          type: 'integer',
          format: 'int32',
          description: '状态',
        },
        subject: {
          type: 'integer',
          format: 'int32',
          description: '科目',
        },
        updateBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '更新开始时间',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateEndDate: {
          type: 'string',
          format: 'date-time',
          description: '更新结束时间',
        },
      },
      title: 'KnowledgePageReq',
      description: '知识点分页请求对象',
    },
    KnowledgeRes: {
      type: 'object',
      properties: {
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createDate: {
          type: 'string',
          format: 'date-time',
          description: '创建时间',
        },
        createUserName: {
          type: 'string',
          description: '创建人名字',
        },
        grade: {
          type: 'integer',
          format: 'int32',
          description: '年级',
        },
        id: {
          type: 'integer',
          format: 'int64',
        },
        name: {
          type: 'string',
          description: '知识点名称',
        },
        nodes: {
          type: 'array',
          description: '子知识点',
          items: {
            $ref: '#/definitions/KnowledgeRes',
          },
        },
        parentId: {
          type: 'integer',
          format: 'int64',
          description: '父节点ID',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        status: {
          type: 'integer',
          format: 'int32',
          description: '状态',
        },
        subject: {
          type: 'integer',
          format: 'int32',
          description: '科目',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateDate: {
          type: 'string',
          format: 'date-time',
          description: '更新时间',
        },
        updateUserName: {
          type: 'string',
          description: '更新人名字',
        },
      },
      title: 'KnowledgeRes',
      description: '知识点对象',
    },
    KnowledgeUpdateReq: {
      type: 'object',
      properties: {
        grade: {
          type: 'integer',
          format: 'int32',
          description: '年级',
        },
        id: {
          type: 'integer',
          format: 'int64',
          description: 'id',
        },
        name: {
          type: 'string',
          description: '知识点名称',
        },
        parentId: {
          type: 'integer',
          format: 'int64',
          description: '父节点ID',
        },
        subject: {
          type: 'integer',
          format: 'int32',
          description: '科目',
        },
      },
      title: 'KnowledgeUpdateReq',
      description: '知识点更新请求对象',
    },
    KnowledgeUpdateRes: {
      type: 'object',
      properties: {
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createDate: {
          type: 'string',
          format: 'date-time',
          description: '创建时间',
        },
        createUserName: {
          type: 'string',
          description: '创建人名字',
        },
        grade: {
          type: 'integer',
          format: 'int32',
          description: '年级',
        },
        id: {
          type: 'integer',
          format: 'int64',
        },
        name: {
          type: 'string',
          description: '知识点名称',
        },
        parentId: {
          type: 'integer',
          format: 'int64',
          description: '父节点ID',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        status: {
          type: 'integer',
          format: 'int32',
          description: '状态',
        },
        subject: {
          type: 'integer',
          format: 'int32',
          description: '科目',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateDate: {
          type: 'string',
          format: 'date-time',
          description: '更新时间',
        },
        updateUserName: {
          type: 'string',
          description: '更新人名字',
        },
      },
      title: 'KnowledgeUpdateRes',
      description: '知识点更新返回对象',
    },
    KnowledgeUpdateStatusReq: {
      type: 'object',
      properties: {
        id: {
          type: 'integer',
          format: 'int64',
          description: 'id',
        },
        status: {
          type: 'integer',
          format: 'int32',
          description: '状态',
        },
      },
      title: 'KnowledgeUpdateStatusReq',
    },
    'LandingPageAddReq model': {
      type: 'object',
      properties: {
        busiType: {
          type: 'integer',
          format: 'int32',
          description: '业务归属：1-低幼, 3-K12 字典：busiType',
        },
        code: {
          type: 'string',
          description: '落地页标识码',
          minLength: 0,
          maxLength: 128,
        },
        content: {
          type: 'string',
          description: '落地页配置内容',
          minLength: 0,
          maxLength: 65535,
        },
        lpType: {
          type: 'integer',
          format: 'int32',
          description: '落地页类型：0-PC, 1-移动  字典：landingpageType',
        },
        name: {
          type: 'string',
          description: '落地页名称',
          minLength: 0,
          maxLength: 64,
        },
        publicUrl: {
          type: 'string',
          description: '落地页URL',
          minLength: 0,
          maxLength: 256,
        },
      },
      title: 'LandingPageAddReq model',
    },
    LandingPageEVRes: {
      type: 'object',
      properties: {
        busiType: {
          type: 'integer',
          format: 'int32',
          description: '业务归属：1-低幼, 3-K12 字典：busiType',
        },
        code: {
          type: 'string',
          description: '落地页标识码',
          minLength: 0,
          maxLength: 128,
        },
        content: {
          type: 'string',
          description: '落地页配置内容',
          minLength: 0,
          maxLength: 65535,
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createDate: {
          type: 'string',
          format: 'date-time',
          description: '创建时间',
        },
        createUserName: {
          type: 'string',
          description: '创建人名字',
        },
        id: {
          type: 'integer',
          format: 'int64',
        },
        lpType: {
          type: 'integer',
          format: 'int32',
          description: '落地页类型：0-PC, 1-移动  字典：landingpageType',
        },
        name: {
          type: 'string',
          description: '落地页名称',
          minLength: 0,
          maxLength: 64,
        },
        publicUrl: {
          type: 'string',
          description: '落地页URL',
          minLength: 0,
          maxLength: 256,
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        status: {
          type: 'integer',
          format: 'int32',
          description: '落地页状态：0-新建, 1-已发布, 2-更新中, 3-下线 字典：landingpageStatus',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateDate: {
          type: 'string',
          format: 'date-time',
          description: '更新时间',
        },
        updateUserName: {
          type: 'string',
          description: '更新人名字',
        },
        version: {
          type: 'integer',
          format: 'int32',
          description: '版本号',
        },
      },
      title: 'LandingPageEVRes',
    },
    LandingPageGetEVReq: {
      type: 'object',
      properties: {
        code: {
          type: 'string',
          description: '落地页标识码',
          minLength: 0,
          maxLength: 128,
        },
      },
      title: 'LandingPageGetEVReq',
    },
    LandingPageOfflineReq: {
      type: 'object',
      properties: {
        code: {
          type: 'string',
          description: '落地页标识码',
          minLength: 0,
          maxLength: 128,
        },
      },
      title: 'LandingPageOfflineReq',
    },
    LandingPagePublishReq: {
      type: 'object',
      properties: {
        code: {
          type: 'string',
          description: '落地页标识码',
          minLength: 0,
          maxLength: 128,
        },
      },
      title: 'LandingPagePublishReq',
    },
    LandingPageQueryReq: {
      type: 'object',
      properties: {
        busiType: {
          type: 'integer',
          format: 'int32',
          description: '业务归属：1-低幼, 3-K12 字典：busiType',
        },
        code: {
          type: 'string',
          description: '落地页标识码',
          minLength: 0,
          maxLength: 128,
        },
        createBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '创建开始时间',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createEndDate: {
          type: 'string',
          format: 'date-time',
          description: '创建结束时间',
        },
        lpType: {
          type: 'integer',
          format: 'int32',
          description: '落地页类型：0-PC, 1-移动  字典：landingpageType',
        },
        name: {
          type: 'string',
          description: '落地页名称',
          minLength: 0,
          maxLength: 64,
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,第N页,默认1',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,每页N条记录,默认20',
        },
        status: {
          type: 'integer',
          format: 'int32',
          description: '落地页状态：0-新建, 1-已发布, 2-更新中, 3-下线 字典：landingpageStatus',
        },
        updateBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '更新开始时间',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateEndDate: {
          type: 'string',
          format: 'date-time',
          description: '更新结束时间',
        },
      },
      title: 'LandingPageQueryReq',
    },
    LandingPageRes: {
      type: 'object',
      properties: {
        busiType: {
          type: 'integer',
          format: 'int32',
          description: '业务归属：1-低幼, 3-K12 字典：busiType',
        },
        code: {
          type: 'string',
          description: '落地页标识码',
          minLength: 0,
          maxLength: 128,
        },
        content: {
          type: 'string',
          description: '落地页配置内容',
          minLength: 0,
          maxLength: 65535,
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createDate: {
          type: 'string',
          format: 'date-time',
          description: '创建时间',
        },
        createUserName: {
          type: 'string',
          description: '创建人名字',
        },
        id: {
          type: 'integer',
          format: 'int64',
        },
        lpType: {
          type: 'integer',
          format: 'int32',
          description: '落地页类型：0-PC, 1-移动  字典：landingpageType',
        },
        name: {
          type: 'string',
          description: '落地页名称',
          minLength: 0,
          maxLength: 64,
        },
        publicUrl: {
          type: 'string',
          description: '落地页URL',
          minLength: 0,
          maxLength: 256,
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        status: {
          type: 'integer',
          format: 'int32',
          description: '落地页状态：0-新建, 1-已发布, 2-更新中, 3-下线 字典：landingpageStatus',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateDate: {
          type: 'string',
          format: 'date-time',
          description: '更新时间',
        },
        updateUserName: {
          type: 'string',
          description: '更新人名字',
        },
        version: {
          type: 'integer',
          format: 'int32',
          description: '版本号',
        },
      },
      title: 'LandingPageRes',
    },
    LandingPageUpdateReq: {
      type: 'object',
      properties: {
        busiType: {
          type: 'integer',
          format: 'int32',
          description: '业务归属：1-低幼, 3-K12 字典：busiType',
        },
        code: {
          type: 'string',
          description: '落地页标识码',
          minLength: 0,
          maxLength: 128,
        },
        content: {
          type: 'string',
          description: '落地页配置内容',
          minLength: 0,
          maxLength: 65535,
        },
        lpType: {
          type: 'integer',
          format: 'int32',
          description: '落地页类型：0-PC, 1-移动  字典：landingpageType',
        },
        name: {
          type: 'string',
          description: '落地页名称',
          minLength: 0,
          maxLength: 64,
        },
        publicUrl: {
          type: 'string',
          description: '落地页URL',
          minLength: 0,
          maxLength: 256,
        },
      },
      title: 'LandingPageUpdateReq',
    },
    LessonConsumeDetailRes: {
      type: 'object',
      properties: {
        accountType: {
          type: 'string',
        },
        clsBy: {
          type: 'integer',
          format: 'int64',
        },
        clsCode: {
          type: 'string',
        },
        clsDate: {
          type: 'string',
          format: 'date-time',
        },
        clsFlag: {
          type: 'integer',
          format: 'int32',
          description: '取消标识',
        },
        courseId: {
          type: 'integer',
          format: 'int64',
        },
        envType: {
          type: 'string',
        },
        lessonId: {
          type: 'integer',
          format: 'int64',
          description: '课节id',
        },
        num: {
          type: 'number',
          format: 'float',
          description: '消耗课时数',
        },
        orderId: {
          type: 'integer',
          format: 'int64',
        },
        uid: {
          type: 'integer',
          format: 'int64',
        },
      },
      title: 'LessonConsumeDetailRes',
    },
    LessonEventQueryReq: {
      type: 'object',
      properties: {
        createBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '创建开始时间',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createEndDate: {
          type: 'string',
          format: 'date-time',
          description: '创建结束时间',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,第N页,默认1',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,每页N条记录,默认20',
        },
        sid: {
          type: 'integer',
          format: 'int64',
          description: '频道ID',
        },
        uid: {
          type: 'integer',
          format: 'int64',
          description: '用户ID',
        },
        updateBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '更新开始时间',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateEndDate: {
          type: 'string',
          format: 'date-time',
          description: '更新结束时间',
        },
      },
      title: 'LessonEventQueryReq',
    },
    LessonEventQueryRes: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
          description: '事件ID',
        },
        levType: {
          type: 'string',
          description: '事件类型',
        },
        opTime: {
          type: 'string',
          format: 'date-time',
          description: '操作时间',
        },
        remark: {
          type: 'string',
        },
      },
      title: 'LessonEventQueryRes',
    },
    MessageReq: {
      type: 'object',
      properties: {
        appId: {
          type: 'integer',
          format: 'int32',
          description: 'appId',
        },
        caseId: {
          type: 'integer',
          format: 'int64',
          description: '线索ID',
        },
        createBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '创建开始时间',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createEndDate: {
          type: 'string',
          format: 'date-time',
          description: '创建结束时间',
        },
        maxMsgId: {
          type: 'integer',
          format: 'int64',
          description: '最大消息ID',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,第N页,默认1',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,每页N条记录,默认20',
        },
        segmentId: {
          type: 'integer',
          format: 'int64',
          description: '段ID',
        },
        seqId: {
          type: 'string',
          description: '序列ID',
        },
        sessionId: {
          type: 'integer',
          format: 'int64',
          description: '会话ID',
        },
        uid: {
          type: 'integer',
          format: 'int64',
          description: '学生uid',
        },
        updateBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '更新开始时间',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateEndDate: {
          type: 'string',
          format: 'date-time',
          description: '更新结束时间',
        },
      },
      title: 'MessageReq',
    },
    MessageRes: {
      type: 'object',
      properties: {
        content: {
          type: 'string',
          description: '消息内容',
        },
        createDate: {
          type: 'string',
          format: 'date-time',
          description: '创建时间',
        },
        id: {
          type: 'integer',
          format: 'int64',
          description: '消息ID',
        },
        mediaType: {
          type: 'integer',
          format: 'int32',
          description: '消息类型',
        },
        properties: {
          type: 'integer',
          format: 'int32',
          description: '消息属性',
        },
        segmentId: {
          type: 'integer',
          format: 'int64',
          description: '段ID',
        },
        sender: {
          type: 'integer',
          format: 'int64',
          description: '发送人uid',
        },
        senderDate: {
          type: 'string',
          format: 'date-time',
          description: '发送时间',
        },
        seqId: {
          type: 'string',
          description: '前端消息序列',
        },
        sessionId: {
          type: 'integer',
          format: 'int64',
          description: '会话ID',
        },
      },
      title: 'MessageRes',
    },
    MessageUserRes: {
      type: 'object',
      properties: {
        avatar: {
          type: 'string',
          description: '头像',
        },
        englishName: {
          type: 'string',
          description: '英文名称',
        },
        gender: {
          type: 'integer',
          format: 'int32',
          description: '性别',
        },
        name: {
          type: 'string',
          description: 'name',
        },
        nickName: {
          type: 'string',
          description: '昵称',
        },
        realName: {
          type: 'string',
          description: '真实名称',
        },
        uid: {
          type: 'integer',
          format: 'int64',
          description: 'uid',
        },
      },
      title: 'MessageUserRes',
    },
    OfflineRes: {
      type: 'object',
      properties: {
        result: {
          type: 'boolean',
          description: '结果',
        },
      },
      title: 'OfflineRes',
    },
    OrderBizLogRes: {
      type: 'object',
      properties: {
        abnormal: {
          type: 'integer',
          format: 'int32',
          description: '信息代码 0x1转正成功 0x2转正失败',
        },
        aftState: {
          type: 'integer',
          format: 'int32',
          description: '更新后置状态 字典：orderState',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createDate: {
          type: 'string',
          format: 'date-time',
          description: '创建时间',
        },
        createUserName: {
          type: 'string',
          description: '创建人名字',
        },
        id: {
          type: 'integer',
          format: 'int64',
        },
        ip: {
          type: 'string',
          description: 'ip',
        },
        preState: {
          type: 'integer',
          format: 'int32',
          description: '更新前置订单状态 字典：orderState',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        type: {
          type: 'string',
          description: '操作类型 new:新建 cls: 取消 pay:支付 formal:转正 refapp:退款申请 refund:退款',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateDate: {
          type: 'string',
          format: 'date-time',
          description: '更新时间',
        },
        updateUserName: {
          type: 'string',
          description: '更新人名字',
        },
      },
      title: 'OrderBizLogRes',
      description: '订单操作记录model',
    },
    OrderDetailRes: {
      type: 'object',
      properties: {
        convertibleCourses: {
          type: 'array',
          description: '可开课程列表',
          items: {
            $ref: '#/definitions/TbConvertibleCourseDto',
          },
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createDate: {
          type: 'string',
          format: 'date-time',
          description: '创建时间',
        },
        createUserName: {
          type: 'string',
          description: '创建人名字',
        },
        deadline: {
          type: 'string',
          format: 'date-time',
          description: '有效结束时间',
        },
        giftNum: {
          type: 'integer',
          format: 'int32',
          description: '赠送数量',
        },
        id: {
          type: 'integer',
          format: 'int64',
        },
        num: {
          type: 'integer',
          format: 'int32',
          description: '购买数量',
        },
        orderId: {
          type: 'integer',
          format: 'int64',
          description: '订单ID',
        },
        oriPrice: {
          type: 'number',
          description: '原金额',
        },
        price: {
          type: 'number',
          description: '销售金额',
        },
        productId: {
          type: 'integer',
          format: 'int64',
          description: '产品ID',
        },
        productName: {
          type: 'string',
          description: '产品名称',
        },
        productType: {
          type: 'integer',
          format: 'int32',
          description: '产品类型',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        startline: {
          type: 'string',
          format: 'date-time',
          description: '有效开始时间',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateDate: {
          type: 'string',
          format: 'date-time',
          description: '更新时间',
        },
        updateUserName: {
          type: 'string',
          description: '更新人名字',
        },
        usePeriod: {
          type: 'integer',
          format: 'int32',
          description: '课时有效期',
        },
      },
      title: 'OrderDetailRes',
    },
    OrderPayDetailRes: {
      type: 'object',
      properties: {
        bankId: {
          type: 'string',
          description: '支付银行,字典 payBank',
        },
        chDealId: {
          type: 'string',
          description: '支付渠道订单号',
        },
        chId: {
          type: 'string',
          description: '支付渠道,字典 payChannel',
        },
        chOrderId: {
          type: 'string',
          description: '商户订单号',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createDate: {
          type: 'string',
          format: 'date-time',
          description: '创建时间',
        },
        createUserName: {
          type: 'string',
          description: '创建人名字',
        },
        id: {
          type: 'integer',
          format: 'int64',
        },
        money: {
          type: 'number',
          description: '支付金额',
        },
        orderId: {
          type: 'integer',
          format: 'int64',
          description: '订单ID',
        },
        payMethod: {
          type: 'string',
          description: '支付方式 字典 payMethod',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        state: {
          type: 'integer',
          format: 'int32',
          description: '支付状态 0 未支付  200 支付完成 300 退款中 400 退款失败  500  已完成部分退款 600 退款成功,字典 payState',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateDate: {
          type: 'string',
          format: 'date-time',
          description: '更新时间',
        },
        updateUserName: {
          type: 'string',
          description: '更新人名字',
        },
      },
      title: 'OrderPayDetailRes',
    },
    OrderRefundPageReq: {
      type: 'object',
      properties: {
        createBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '创建开始时间',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createEndDate: {
          type: 'string',
          format: 'date-time',
          description: '创建结束时间',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,第N页,默认1',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,每页N条记录,默认20',
        },
        state: {
          type: 'integer',
          format: 'int32',
          description: '退费单状态，字典:refundState',
        },
        uid: {
          type: 'integer',
          format: 'int64',
          description: '学生ID',
        },
        updateBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '更新开始时间',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateEndDate: {
          type: 'string',
          format: 'date-time',
          description: '更新结束时间',
        },
      },
      title: 'OrderRefundPageReq',
    },
    OrderReq: {
      type: 'object',
      required: [
        'state',
      ],
      properties: {
        busiType: {
          type: 'integer',
          format: 'int32',
          description: '订单业务类型，字典：busiType',
        },
        clsBy: {
          type: 'integer',
          format: 'int64',
          description: '取消操作人ID',
        },
        clsReason: {
          type: 'integer',
          format: 'int32',
          description: '取消原因',
        },
        createBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '创建开始时间',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createEndDate: {
          type: 'string',
          format: 'date-time',
          description: '创建结束时间',
        },
        deadlineBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '支付有效期开始时间',
        },
        deadlineEndDate: {
          type: 'string',
          format: 'date-time',
          description: '支付有效期结束时间',
        },
        istest: {
          type: 'integer',
          format: 'int32',
          description: "是否是试听单'0表示试听单，1表示正式单'",
        },
        mobile: {
          type: 'string',
          description: '学生手机',
        },
        orderCode: {
          type: 'string',
          description: '订单编号',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,第N页,默认1',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,每页N条记录,默认20',
        },
        payedTimeBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '支付完成开始时间',
        },
        payedTimeEndDate: {
          type: 'string',
          format: 'date-time',
          description: '支付完成结束时间',
        },
        queryAgreement: {
          type: 'boolean',
          description: '是否填充协议情况',
        },
        salesUid: {
          type: 'integer',
          format: 'int64',
          description: '销售uid',
        },
        source: {
          type: 'string',
          description: '订单来源',
        },
        state: {
          type: 'integer',
          format: 'int32',
          description: '订单状态 字典：orderState',
        },
        uid: {
          type: 'integer',
          format: 'int64',
          description: '学生ID',
        },
        updateBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '更新开始时间',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateEndDate: {
          type: 'string',
          format: 'date-time',
          description: '更新结束时间',
        },
      },
      title: 'OrderReq',
      description: '订单中心列表查询 model',
    },
    OrderRes: {
      type: 'object',
      properties: {
        busiType: {
          type: 'integer',
          format: 'int32',
          description: '订单业务类型',
        },
        buyedNum: {
          type: 'integer',
          format: 'int32',
          description: '购买数量',
        },
        clsBy: {
          type: 'integer',
          format: 'int64',
          description: '取消操作人ID',
        },
        clsReason: {
          type: 'integer',
          format: 'int32',
          description: '取消原因',
        },
        clsRemarks: {
          type: 'string',
          description: '取消备注',
        },
        clsTime: {
          type: 'string',
          format: 'date-time',
          description: '取消时间',
        },
        clsUserName: {
          type: 'string',
          description: '取消操作人',
        },
        couponId: {
          type: 'integer',
          format: 'int64',
          description: '优惠',
        },
        couponName: {
          type: 'string',
          description: '优惠名称',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createDate: {
          type: 'string',
          format: 'date-time',
          description: '创建时间',
        },
        createUserName: {
          type: 'string',
          description: '创建人名字',
        },
        deadline: {
          type: 'string',
          format: 'date-time',
          description: '支付有效期',
        },
        discMoney: {
          type: 'number',
          description: '优惠金额 原始金额-成交金额',
        },
        financePriceTotal: {
          type: 'number',
          description: '财务确认收款金',
        },
        formalTime: {
          type: 'string',
          format: 'date-time',
          description: '订单完成时间',
        },
        goodsId: {
          type: 'integer',
          format: 'int64',
          description: '商品ID',
        },
        id: {
          type: 'integer',
          format: 'int64',
        },
        istest: {
          type: 'integer',
          format: 'int32',
          description: "是否是试听单'0表示试听单，1表示正式单'",
        },
        money: {
          type: 'number',
          description: '成交金额',
        },
        name: {
          type: 'string',
          description: '订单商品名称',
        },
        orderCode: {
          type: 'string',
          description: '订单编号',
        },
        oriMoney: {
          type: 'number',
          description: '原始金额',
        },
        payedMoney: {
          type: 'number',
          description: '支付金额',
        },
        payedTime: {
          type: 'string',
          format: 'date-time',
          description: '支付完成时间/最后支付时间',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        salesUid: {
          type: 'integer',
          format: 'int64',
          description: '售卖人uid',
        },
        salesUserName: {
          type: 'string',
          description: '售卖人',
        },
        signAgreement: {
          type: 'integer',
          format: 'int32',
          description: '协议签订情况,字典：signAgreementFlg',
        },
        source: {
          type: 'string',
          description: '订单来源',
        },
        state: {
          type: 'integer',
          format: 'int32',
          description: '订单状态 字典：orderState',
        },
        stuUserMobile: {
          type: 'string',
          description: '学生手机号',
        },
        stuUserName: {
          type: 'string',
          description: '学生用户名',
        },
        uid: {
          type: 'integer',
          format: 'int64',
          description: '学生ID',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateDate: {
          type: 'string',
          format: 'date-time',
          description: '更新时间',
        },
        updateUserName: {
          type: 'string',
          description: '更新人名字',
        },
      },
      title: 'OrderRes',
      description: '订单中心列表响应model',
    },
    OrderResult: {
      type: 'object',
      properties: {
        orderCode: {
          type: 'string',
          description: '订单编号',
        },
        orderId: {
          type: 'integer',
          format: 'int64',
          description: '订单Id',
        },
      },
      title: 'OrderResult',
    },
    PageEndLessonRes: {
      type: 'object',
      properties: {
        endTime: {
          type: 'string',
          format: 'date-time',
          description: '课节结束时间',
        },
        lessonId: {
          type: 'integer',
          format: 'int64',
          description: '课节id',
        },
        startTime: {
          type: 'string',
          format: 'date-time',
          description: '课节开始时间',
        },
        studentUid: {
          type: 'integer',
          format: 'int64',
          description: '学生UID',
        },
        subject: {
          type: 'integer',
          format: 'int32',
          description: '课节科目，字典：subject',
        },
        teacherName: {
          type: 'string',
          description: '老师姓名',
        },
        teacherUid: {
          type: 'integer',
          format: 'int64',
          description: '老师UID',
        },
      },
      title: 'PageEndLessonRes',
    },
    PageRequest: {
      type: 'object',
      properties: {
        offset: {
          type: 'integer',
          format: 'int32',
        },
        page: {
          type: 'integer',
          format: 'int32',
        },
        pageNumber: {
          type: 'integer',
          format: 'int32',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
        },
        size: {
          type: 'integer',
          format: 'int32',
        },
        sort: {
          $ref: '#/definitions/Sort',
        },
      },
      title: 'PageRequest',
    },
    'Page«BuyedCourseInfoRes»': {
      type: 'object',
      properties: {
        disabled: {
          type: 'boolean',
        },
        first: {
          type: 'integer',
          format: 'int32',
        },
        firstPage: {
          type: 'boolean',
        },
        firstResult: {
          type: 'integer',
          format: 'int32',
        },
        funcName: {
          type: 'string',
        },
        funcParam: {
          type: 'string',
        },
        html: {
          type: 'string',
        },
        last: {
          type: 'integer',
          format: 'int32',
        },
        lastPage: {
          type: 'boolean',
        },
        list: {
          type: 'array',
          items: {
            $ref: '#/definitions/BuyedCourseInfoRes',
          },
        },
        maxResults: {
          type: 'integer',
          format: 'int32',
        },
        next: {
          type: 'integer',
          format: 'int32',
        },
        notTotal: {
          type: 'boolean',
        },
        orderBy: {
          type: 'string',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
        },
        prev: {
          type: 'integer',
          format: 'int32',
        },
        total: {
          type: 'integer',
          format: 'int64',
        },
        totalPage: {
          type: 'integer',
          format: 'int32',
        },
      },
      title: 'Page«BuyedCourseInfoRes»',
    },
    'Page«ClientReportRes»': {
      type: 'object',
      properties: {
        disabled: {
          type: 'boolean',
        },
        first: {
          type: 'integer',
          format: 'int32',
        },
        firstPage: {
          type: 'boolean',
        },
        firstResult: {
          type: 'integer',
          format: 'int32',
        },
        funcName: {
          type: 'string',
        },
        funcParam: {
          type: 'string',
        },
        html: {
          type: 'string',
        },
        last: {
          type: 'integer',
          format: 'int32',
        },
        lastPage: {
          type: 'boolean',
        },
        list: {
          type: 'array',
          items: {
            $ref: '#/definitions/ClientReportRes',
          },
        },
        maxResults: {
          type: 'integer',
          format: 'int32',
        },
        next: {
          type: 'integer',
          format: 'int32',
        },
        notTotal: {
          type: 'boolean',
        },
        orderBy: {
          type: 'string',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
        },
        prev: {
          type: 'integer',
          format: 'int32',
        },
        total: {
          type: 'integer',
          format: 'int64',
        },
        totalPage: {
          type: 'integer',
          format: 'int32',
        },
      },
      title: 'Page«ClientReportRes»',
    },
    'Page«CoursewareMaterialRes»': {
      type: 'object',
      properties: {
        disabled: {
          type: 'boolean',
        },
        first: {
          type: 'integer',
          format: 'int32',
        },
        firstPage: {
          type: 'boolean',
        },
        firstResult: {
          type: 'integer',
          format: 'int32',
        },
        funcName: {
          type: 'string',
        },
        funcParam: {
          type: 'string',
        },
        html: {
          type: 'string',
        },
        last: {
          type: 'integer',
          format: 'int32',
        },
        lastPage: {
          type: 'boolean',
        },
        list: {
          type: 'array',
          items: {
            $ref: '#/definitions/CoursewareMaterialRes',
          },
        },
        maxResults: {
          type: 'integer',
          format: 'int32',
        },
        next: {
          type: 'integer',
          format: 'int32',
        },
        notTotal: {
          type: 'boolean',
        },
        orderBy: {
          type: 'string',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
        },
        prev: {
          type: 'integer',
          format: 'int32',
        },
        total: {
          type: 'integer',
          format: 'int64',
        },
        totalPage: {
          type: 'integer',
          format: 'int32',
        },
      },
      title: 'Page«CoursewareMaterialRes»',
    },
    'Page«CoursewarePptPageRes»': {
      type: 'object',
      properties: {
        disabled: {
          type: 'boolean',
        },
        first: {
          type: 'integer',
          format: 'int32',
        },
        firstPage: {
          type: 'boolean',
        },
        firstResult: {
          type: 'integer',
          format: 'int32',
        },
        funcName: {
          type: 'string',
        },
        funcParam: {
          type: 'string',
        },
        html: {
          type: 'string',
        },
        last: {
          type: 'integer',
          format: 'int32',
        },
        lastPage: {
          type: 'boolean',
        },
        list: {
          type: 'array',
          items: {
            $ref: '#/definitions/CoursewarePptPageRes',
          },
        },
        maxResults: {
          type: 'integer',
          format: 'int32',
        },
        next: {
          type: 'integer',
          format: 'int32',
        },
        notTotal: {
          type: 'boolean',
        },
        orderBy: {
          type: 'string',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
        },
        prev: {
          type: 'integer',
          format: 'int32',
        },
        total: {
          type: 'integer',
          format: 'int64',
        },
        totalPage: {
          type: 'integer',
          format: 'int32',
        },
      },
      title: 'Page«CoursewarePptPageRes»',
    },
    'Page«CoursewareXmlPageRes»': {
      type: 'object',
      properties: {
        disabled: {
          type: 'boolean',
        },
        first: {
          type: 'integer',
          format: 'int32',
        },
        firstPage: {
          type: 'boolean',
        },
        firstResult: {
          type: 'integer',
          format: 'int32',
        },
        funcName: {
          type: 'string',
        },
        funcParam: {
          type: 'string',
        },
        html: {
          type: 'string',
        },
        last: {
          type: 'integer',
          format: 'int32',
        },
        lastPage: {
          type: 'boolean',
        },
        list: {
          type: 'array',
          items: {
            $ref: '#/definitions/CoursewareXmlPageRes',
          },
        },
        maxResults: {
          type: 'integer',
          format: 'int32',
        },
        next: {
          type: 'integer',
          format: 'int32',
        },
        notTotal: {
          type: 'boolean',
        },
        orderBy: {
          type: 'string',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
        },
        prev: {
          type: 'integer',
          format: 'int32',
        },
        total: {
          type: 'integer',
          format: 'int64',
        },
        totalPage: {
          type: 'integer',
          format: 'int32',
        },
      },
      title: 'Page«CoursewareXmlPageRes»',
    },
    'Page«CrmCaseRes»': {
      type: 'object',
      properties: {
        disabled: {
          type: 'boolean',
        },
        first: {
          type: 'integer',
          format: 'int32',
        },
        firstPage: {
          type: 'boolean',
        },
        firstResult: {
          type: 'integer',
          format: 'int32',
        },
        funcName: {
          type: 'string',
        },
        funcParam: {
          type: 'string',
        },
        html: {
          type: 'string',
        },
        last: {
          type: 'integer',
          format: 'int32',
        },
        lastPage: {
          type: 'boolean',
        },
        list: {
          type: 'array',
          items: {
            $ref: '#/definitions/CrmCaseRes',
          },
        },
        maxResults: {
          type: 'integer',
          format: 'int32',
        },
        next: {
          type: 'integer',
          format: 'int32',
        },
        notTotal: {
          type: 'boolean',
        },
        orderBy: {
          type: 'string',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
        },
        prev: {
          type: 'integer',
          format: 'int32',
        },
        total: {
          type: 'integer',
          format: 'int64',
        },
        totalPage: {
          type: 'integer',
          format: 'int32',
        },
      },
      title: 'Page«CrmCaseRes»',
    },
    'Page«GoodsPageInfoRes»': {
      type: 'object',
      properties: {
        disabled: {
          type: 'boolean',
        },
        first: {
          type: 'integer',
          format: 'int32',
        },
        firstPage: {
          type: 'boolean',
        },
        firstResult: {
          type: 'integer',
          format: 'int32',
        },
        funcName: {
          type: 'string',
        },
        funcParam: {
          type: 'string',
        },
        html: {
          type: 'string',
        },
        last: {
          type: 'integer',
          format: 'int32',
        },
        lastPage: {
          type: 'boolean',
        },
        list: {
          type: 'array',
          items: {
            $ref: '#/definitions/GoodsPageInfoRes',
          },
        },
        maxResults: {
          type: 'integer',
          format: 'int32',
        },
        next: {
          type: 'integer',
          format: 'int32',
        },
        notTotal: {
          type: 'boolean',
        },
        orderBy: {
          type: 'string',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
        },
        prev: {
          type: 'integer',
          format: 'int32',
        },
        total: {
          type: 'integer',
          format: 'int64',
        },
        totalPage: {
          type: 'integer',
          format: 'int32',
        },
      },
      title: 'Page«GoodsPageInfoRes»',
    },
    'Page«KnowledgeRes»': {
      type: 'object',
      properties: {
        disabled: {
          type: 'boolean',
        },
        first: {
          type: 'integer',
          format: 'int32',
        },
        firstPage: {
          type: 'boolean',
        },
        firstResult: {
          type: 'integer',
          format: 'int32',
        },
        funcName: {
          type: 'string',
        },
        funcParam: {
          type: 'string',
        },
        html: {
          type: 'string',
        },
        last: {
          type: 'integer',
          format: 'int32',
        },
        lastPage: {
          type: 'boolean',
        },
        list: {
          type: 'array',
          items: {
            $ref: '#/definitions/KnowledgeRes',
          },
        },
        maxResults: {
          type: 'integer',
          format: 'int32',
        },
        next: {
          type: 'integer',
          format: 'int32',
        },
        notTotal: {
          type: 'boolean',
        },
        orderBy: {
          type: 'string',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
        },
        prev: {
          type: 'integer',
          format: 'int32',
        },
        total: {
          type: 'integer',
          format: 'int64',
        },
        totalPage: {
          type: 'integer',
          format: 'int32',
        },
      },
      title: 'Page«KnowledgeRes»',
    },
    'Page«LandingPageRes»': {
      type: 'object',
      properties: {
        disabled: {
          type: 'boolean',
        },
        first: {
          type: 'integer',
          format: 'int32',
        },
        firstPage: {
          type: 'boolean',
        },
        firstResult: {
          type: 'integer',
          format: 'int32',
        },
        funcName: {
          type: 'string',
        },
        funcParam: {
          type: 'string',
        },
        html: {
          type: 'string',
        },
        last: {
          type: 'integer',
          format: 'int32',
        },
        lastPage: {
          type: 'boolean',
        },
        list: {
          type: 'array',
          items: {
            $ref: '#/definitions/LandingPageRes',
          },
        },
        maxResults: {
          type: 'integer',
          format: 'int32',
        },
        next: {
          type: 'integer',
          format: 'int32',
        },
        notTotal: {
          type: 'boolean',
        },
        orderBy: {
          type: 'string',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
        },
        prev: {
          type: 'integer',
          format: 'int32',
        },
        total: {
          type: 'integer',
          format: 'int64',
        },
        totalPage: {
          type: 'integer',
          format: 'int32',
        },
      },
      title: 'Page«LandingPageRes»',
    },
    'Page«LessonEventQueryRes»': {
      type: 'object',
      properties: {
        disabled: {
          type: 'boolean',
        },
        first: {
          type: 'integer',
          format: 'int32',
        },
        firstPage: {
          type: 'boolean',
        },
        firstResult: {
          type: 'integer',
          format: 'int32',
        },
        funcName: {
          type: 'string',
        },
        funcParam: {
          type: 'string',
        },
        html: {
          type: 'string',
        },
        last: {
          type: 'integer',
          format: 'int32',
        },
        lastPage: {
          type: 'boolean',
        },
        list: {
          type: 'array',
          items: {
            $ref: '#/definitions/LessonEventQueryRes',
          },
        },
        maxResults: {
          type: 'integer',
          format: 'int32',
        },
        next: {
          type: 'integer',
          format: 'int32',
        },
        notTotal: {
          type: 'boolean',
        },
        orderBy: {
          type: 'string',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
        },
        prev: {
          type: 'integer',
          format: 'int32',
        },
        total: {
          type: 'integer',
          format: 'int64',
        },
        totalPage: {
          type: 'integer',
          format: 'int32',
        },
      },
      title: 'Page«LessonEventQueryRes»',
    },
    'Page«MessageRes»': {
      type: 'object',
      properties: {
        disabled: {
          type: 'boolean',
        },
        first: {
          type: 'integer',
          format: 'int32',
        },
        firstPage: {
          type: 'boolean',
        },
        firstResult: {
          type: 'integer',
          format: 'int32',
        },
        funcName: {
          type: 'string',
        },
        funcParam: {
          type: 'string',
        },
        html: {
          type: 'string',
        },
        last: {
          type: 'integer',
          format: 'int32',
        },
        lastPage: {
          type: 'boolean',
        },
        list: {
          type: 'array',
          items: {
            $ref: '#/definitions/MessageRes',
          },
        },
        maxResults: {
          type: 'integer',
          format: 'int32',
        },
        next: {
          type: 'integer',
          format: 'int32',
        },
        notTotal: {
          type: 'boolean',
        },
        orderBy: {
          type: 'string',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
        },
        prev: {
          type: 'integer',
          format: 'int32',
        },
        total: {
          type: 'integer',
          format: 'int64',
        },
        totalPage: {
          type: 'integer',
          format: 'int32',
        },
      },
      title: 'Page«MessageRes»',
    },
    'Page«OrderRes»': {
      type: 'object',
      properties: {
        disabled: {
          type: 'boolean',
        },
        first: {
          type: 'integer',
          format: 'int32',
        },
        firstPage: {
          type: 'boolean',
        },
        firstResult: {
          type: 'integer',
          format: 'int32',
        },
        funcName: {
          type: 'string',
        },
        funcParam: {
          type: 'string',
        },
        html: {
          type: 'string',
        },
        last: {
          type: 'integer',
          format: 'int32',
        },
        lastPage: {
          type: 'boolean',
        },
        list: {
          type: 'array',
          items: {
            $ref: '#/definitions/OrderRes',
          },
        },
        maxResults: {
          type: 'integer',
          format: 'int32',
        },
        next: {
          type: 'integer',
          format: 'int32',
        },
        notTotal: {
          type: 'boolean',
        },
        orderBy: {
          type: 'string',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
        },
        prev: {
          type: 'integer',
          format: 'int32',
        },
        total: {
          type: 'integer',
          format: 'int64',
        },
        totalPage: {
          type: 'integer',
          format: 'int32',
        },
      },
      title: 'Page«OrderRes»',
    },
    'Page«PageEndLessonRes»': {
      type: 'object',
      properties: {
        disabled: {
          type: 'boolean',
        },
        first: {
          type: 'integer',
          format: 'int32',
        },
        firstPage: {
          type: 'boolean',
        },
        firstResult: {
          type: 'integer',
          format: 'int32',
        },
        funcName: {
          type: 'string',
        },
        funcParam: {
          type: 'string',
        },
        html: {
          type: 'string',
        },
        last: {
          type: 'integer',
          format: 'int32',
        },
        lastPage: {
          type: 'boolean',
        },
        list: {
          type: 'array',
          items: {
            $ref: '#/definitions/PageEndLessonRes',
          },
        },
        maxResults: {
          type: 'integer',
          format: 'int32',
        },
        next: {
          type: 'integer',
          format: 'int32',
        },
        notTotal: {
          type: 'boolean',
        },
        orderBy: {
          type: 'string',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
        },
        prev: {
          type: 'integer',
          format: 'int32',
        },
        total: {
          type: 'integer',
          format: 'int64',
        },
        totalPage: {
          type: 'integer',
          format: 'int32',
        },
      },
      title: 'Page«PageEndLessonRes»',
    },
    'Page«SchoolRes»': {
      type: 'object',
      properties: {
        disabled: {
          type: 'boolean',
        },
        first: {
          type: 'integer',
          format: 'int32',
        },
        firstPage: {
          type: 'boolean',
        },
        firstResult: {
          type: 'integer',
          format: 'int32',
        },
        funcName: {
          type: 'string',
        },
        funcParam: {
          type: 'string',
        },
        html: {
          type: 'string',
        },
        last: {
          type: 'integer',
          format: 'int32',
        },
        lastPage: {
          type: 'boolean',
        },
        list: {
          type: 'array',
          items: {
            $ref: '#/definitions/SchoolRes',
          },
        },
        maxResults: {
          type: 'integer',
          format: 'int32',
        },
        next: {
          type: 'integer',
          format: 'int32',
        },
        notTotal: {
          type: 'boolean',
        },
        orderBy: {
          type: 'string',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
        },
        prev: {
          type: 'integer',
          format: 'int32',
        },
        total: {
          type: 'integer',
          format: 'int64',
        },
        totalPage: {
          type: 'integer',
          format: 'int32',
        },
      },
      title: 'Page«SchoolRes»',
    },
    'Page«SessionRes»': {
      type: 'object',
      properties: {
        disabled: {
          type: 'boolean',
        },
        first: {
          type: 'integer',
          format: 'int32',
        },
        firstPage: {
          type: 'boolean',
        },
        firstResult: {
          type: 'integer',
          format: 'int32',
        },
        funcName: {
          type: 'string',
        },
        funcParam: {
          type: 'string',
        },
        html: {
          type: 'string',
        },
        last: {
          type: 'integer',
          format: 'int32',
        },
        lastPage: {
          type: 'boolean',
        },
        list: {
          type: 'array',
          items: {
            $ref: '#/definitions/SessionRes',
          },
        },
        maxResults: {
          type: 'integer',
          format: 'int32',
        },
        next: {
          type: 'integer',
          format: 'int32',
        },
        notTotal: {
          type: 'boolean',
        },
        orderBy: {
          type: 'string',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
        },
        prev: {
          type: 'integer',
          format: 'int32',
        },
        total: {
          type: 'integer',
          format: 'int64',
        },
        totalPage: {
          type: 'integer',
          format: 'int32',
        },
      },
      title: 'Page«SessionRes»',
    },
    'Page«StandardClassCoursewareRes»': {
      type: 'object',
      properties: {
        disabled: {
          type: 'boolean',
        },
        first: {
          type: 'integer',
          format: 'int32',
        },
        firstPage: {
          type: 'boolean',
        },
        firstResult: {
          type: 'integer',
          format: 'int32',
        },
        funcName: {
          type: 'string',
        },
        funcParam: {
          type: 'string',
        },
        html: {
          type: 'string',
        },
        last: {
          type: 'integer',
          format: 'int32',
        },
        lastPage: {
          type: 'boolean',
        },
        list: {
          type: 'array',
          items: {
            $ref: '#/definitions/StandardClassCoursewareRes',
          },
        },
        maxResults: {
          type: 'integer',
          format: 'int32',
        },
        next: {
          type: 'integer',
          format: 'int32',
        },
        notTotal: {
          type: 'boolean',
        },
        orderBy: {
          type: 'string',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
        },
        prev: {
          type: 'integer',
          format: 'int32',
        },
        total: {
          type: 'integer',
          format: 'int64',
        },
        totalPage: {
          type: 'integer',
          format: 'int32',
        },
      },
      title: 'Page«StandardClassCoursewareRes»',
    },
    'Page«TeacherRes»': {
      type: 'object',
      properties: {
        disabled: {
          type: 'boolean',
        },
        first: {
          type: 'integer',
          format: 'int32',
        },
        firstPage: {
          type: 'boolean',
        },
        firstResult: {
          type: 'integer',
          format: 'int32',
        },
        funcName: {
          type: 'string',
        },
        funcParam: {
          type: 'string',
        },
        html: {
          type: 'string',
        },
        last: {
          type: 'integer',
          format: 'int32',
        },
        lastPage: {
          type: 'boolean',
        },
        list: {
          type: 'array',
          items: {
            $ref: '#/definitions/TeacherRes',
          },
        },
        maxResults: {
          type: 'integer',
          format: 'int32',
        },
        next: {
          type: 'integer',
          format: 'int32',
        },
        notTotal: {
          type: 'boolean',
        },
        orderBy: {
          type: 'string',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
        },
        prev: {
          type: 'integer',
          format: 'int32',
        },
        total: {
          type: 'integer',
          format: 'int64',
        },
        totalPage: {
          type: 'integer',
          format: 'int32',
        },
      },
      title: 'Page«TeacherRes»',
    },
    'Page«内容库分类 model»': {
      type: 'object',
      properties: {
        disabled: {
          type: 'boolean',
        },
        first: {
          type: 'integer',
          format: 'int32',
        },
        firstPage: {
          type: 'boolean',
        },
        firstResult: {
          type: 'integer',
          format: 'int32',
        },
        funcName: {
          type: 'string',
        },
        funcParam: {
          type: 'string',
        },
        html: {
          type: 'string',
        },
        last: {
          type: 'integer',
          format: 'int32',
        },
        lastPage: {
          type: 'boolean',
        },
        list: {
          type: 'array',
          items: {
            $ref: '#/definitions/内容库分类 model',
          },
        },
        maxResults: {
          type: 'integer',
          format: 'int32',
        },
        next: {
          type: 'integer',
          format: 'int32',
        },
        notTotal: {
          type: 'boolean',
        },
        orderBy: {
          type: 'string',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
        },
        prev: {
          type: 'integer',
          format: 'int32',
        },
        total: {
          type: 'integer',
          format: 'int64',
        },
        totalPage: {
          type: 'integer',
          format: 'int32',
        },
      },
      title: 'Page«内容库分类 model»',
    },
    'Page«协议分页返回实体»': {
      type: 'object',
      properties: {
        disabled: {
          type: 'boolean',
        },
        first: {
          type: 'integer',
          format: 'int32',
        },
        firstPage: {
          type: 'boolean',
        },
        firstResult: {
          type: 'integer',
          format: 'int32',
        },
        funcName: {
          type: 'string',
        },
        funcParam: {
          type: 'string',
        },
        html: {
          type: 'string',
        },
        last: {
          type: 'integer',
          format: 'int32',
        },
        lastPage: {
          type: 'boolean',
        },
        list: {
          type: 'array',
          items: {
            $ref: '#/definitions/协议分页返回实体',
          },
        },
        maxResults: {
          type: 'integer',
          format: 'int32',
        },
        next: {
          type: 'integer',
          format: 'int32',
        },
        notTotal: {
          type: 'boolean',
        },
        orderBy: {
          type: 'string',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
        },
        prev: {
          type: 'integer',
          format: 'int32',
        },
        total: {
          type: 'integer',
          format: 'int64',
        },
        totalPage: {
          type: 'integer',
          format: 'int32',
        },
      },
      title: 'Page«协议分页返回实体»',
    },
    'Page«商品 model»': {
      type: 'object',
      properties: {
        disabled: {
          type: 'boolean',
        },
        first: {
          type: 'integer',
          format: 'int32',
        },
        firstPage: {
          type: 'boolean',
        },
        firstResult: {
          type: 'integer',
          format: 'int32',
        },
        funcName: {
          type: 'string',
        },
        funcParam: {
          type: 'string',
        },
        html: {
          type: 'string',
        },
        last: {
          type: 'integer',
          format: 'int32',
        },
        lastPage: {
          type: 'boolean',
        },
        list: {
          type: 'array',
          items: {
            $ref: '#/definitions/商品 model',
          },
        },
        maxResults: {
          type: 'integer',
          format: 'int32',
        },
        next: {
          type: 'integer',
          format: 'int32',
        },
        notTotal: {
          type: 'boolean',
        },
        orderBy: {
          type: 'string',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
        },
        prev: {
          type: 'integer',
          format: 'int32',
        },
        total: {
          type: 'integer',
          format: 'int64',
        },
        totalPage: {
          type: 'integer',
          format: 'int32',
        },
      },
      title: 'Page«商品 model»',
    },
    'Page«字典 model»': {
      type: 'object',
      properties: {
        disabled: {
          type: 'boolean',
        },
        first: {
          type: 'integer',
          format: 'int32',
        },
        firstPage: {
          type: 'boolean',
        },
        firstResult: {
          type: 'integer',
          format: 'int32',
        },
        funcName: {
          type: 'string',
        },
        funcParam: {
          type: 'string',
        },
        html: {
          type: 'string',
        },
        last: {
          type: 'integer',
          format: 'int32',
        },
        lastPage: {
          type: 'boolean',
        },
        list: {
          type: 'array',
          items: {
            $ref: '#/definitions/字典 model',
          },
        },
        maxResults: {
          type: 'integer',
          format: 'int32',
        },
        next: {
          type: 'integer',
          format: 'int32',
        },
        notTotal: {
          type: 'boolean',
        },
        orderBy: {
          type: 'string',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
        },
        prev: {
          type: 'integer',
          format: 'int32',
        },
        total: {
          type: 'integer',
          format: 'int64',
        },
        totalPage: {
          type: 'integer',
          format: 'int32',
        },
      },
      title: 'Page«字典 model»',
    },
    'Page«学生已开课程分页结果 model»': {
      type: 'object',
      properties: {
        disabled: {
          type: 'boolean',
        },
        first: {
          type: 'integer',
          format: 'int32',
        },
        firstPage: {
          type: 'boolean',
        },
        firstResult: {
          type: 'integer',
          format: 'int32',
        },
        funcName: {
          type: 'string',
        },
        funcParam: {
          type: 'string',
        },
        html: {
          type: 'string',
        },
        last: {
          type: 'integer',
          format: 'int32',
        },
        lastPage: {
          type: 'boolean',
        },
        list: {
          type: 'array',
          items: {
            $ref: '#/definitions/学生已开课程分页结果 model',
          },
        },
        maxResults: {
          type: 'integer',
          format: 'int32',
        },
        next: {
          type: 'integer',
          format: 'int32',
        },
        notTotal: {
          type: 'boolean',
        },
        orderBy: {
          type: 'string',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
        },
        prev: {
          type: 'integer',
          format: 'int32',
        },
        total: {
          type: 'integer',
          format: 'int64',
        },
        totalPage: {
          type: 'integer',
          format: 'int32',
        },
      },
      title: 'Page«学生已开课程分页结果 model»',
    },
    'Page«学生课节实例model»': {
      type: 'object',
      properties: {
        disabled: {
          type: 'boolean',
        },
        first: {
          type: 'integer',
          format: 'int32',
        },
        firstPage: {
          type: 'boolean',
        },
        firstResult: {
          type: 'integer',
          format: 'int32',
        },
        funcName: {
          type: 'string',
        },
        funcParam: {
          type: 'string',
        },
        html: {
          type: 'string',
        },
        last: {
          type: 'integer',
          format: 'int32',
        },
        lastPage: {
          type: 'boolean',
        },
        list: {
          type: 'array',
          items: {
            $ref: '#/definitions/学生课节实例model',
          },
        },
        maxResults: {
          type: 'integer',
          format: 'int32',
        },
        next: {
          type: 'integer',
          format: 'int32',
        },
        notTotal: {
          type: 'boolean',
        },
        orderBy: {
          type: 'string',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
        },
        prev: {
          type: 'integer',
          format: 'int32',
        },
        total: {
          type: 'integer',
          format: 'int64',
        },
        totalPage: {
          type: 'integer',
          format: 'int32',
        },
      },
      title: 'Page«学生课节实例model»',
    },
    'Page«教材 model »': {
      type: 'object',
      properties: {
        disabled: {
          type: 'boolean',
        },
        first: {
          type: 'integer',
          format: 'int32',
        },
        firstPage: {
          type: 'boolean',
        },
        firstResult: {
          type: 'integer',
          format: 'int32',
        },
        funcName: {
          type: 'string',
        },
        funcParam: {
          type: 'string',
        },
        html: {
          type: 'string',
        },
        last: {
          type: 'integer',
          format: 'int32',
        },
        lastPage: {
          type: 'boolean',
        },
        list: {
          type: 'array',
          items: {
            $ref: '#/definitions/教材 model ',
          },
        },
        maxResults: {
          type: 'integer',
          format: 'int32',
        },
        next: {
          type: 'integer',
          format: 'int32',
        },
        notTotal: {
          type: 'boolean',
        },
        orderBy: {
          type: 'string',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
        },
        prev: {
          type: 'integer',
          format: 'int32',
        },
        total: {
          type: 'integer',
          format: 'int64',
        },
        totalPage: {
          type: 'integer',
          format: 'int32',
        },
      },
      title: 'Page«教材 model »',
    },
    'Page«知识点内容 model»': {
      type: 'object',
      properties: {
        disabled: {
          type: 'boolean',
        },
        first: {
          type: 'integer',
          format: 'int32',
        },
        firstPage: {
          type: 'boolean',
        },
        firstResult: {
          type: 'integer',
          format: 'int32',
        },
        funcName: {
          type: 'string',
        },
        funcParam: {
          type: 'string',
        },
        html: {
          type: 'string',
        },
        last: {
          type: 'integer',
          format: 'int32',
        },
        lastPage: {
          type: 'boolean',
        },
        list: {
          type: 'array',
          items: {
            $ref: '#/definitions/知识点内容 model',
          },
        },
        maxResults: {
          type: 'integer',
          format: 'int32',
        },
        next: {
          type: 'integer',
          format: 'int32',
        },
        notTotal: {
          type: 'boolean',
        },
        orderBy: {
          type: 'string',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
        },
        prev: {
          type: 'integer',
          format: 'int32',
        },
        total: {
          type: 'integer',
          format: 'int64',
        },
        totalPage: {
          type: 'integer',
          format: 'int32',
        },
      },
      title: 'Page«知识点内容 model»',
    },
    'Page«磨耳朵分页列表响应 model»': {
      type: 'object',
      properties: {
        disabled: {
          type: 'boolean',
        },
        first: {
          type: 'integer',
          format: 'int32',
        },
        firstPage: {
          type: 'boolean',
        },
        firstResult: {
          type: 'integer',
          format: 'int32',
        },
        funcName: {
          type: 'string',
        },
        funcParam: {
          type: 'string',
        },
        html: {
          type: 'string',
        },
        last: {
          type: 'integer',
          format: 'int32',
        },
        lastPage: {
          type: 'boolean',
        },
        list: {
          type: 'array',
          items: {
            $ref: '#/definitions/磨耳朵分页列表响应 model',
          },
        },
        maxResults: {
          type: 'integer',
          format: 'int32',
        },
        next: {
          type: 'integer',
          format: 'int32',
        },
        notTotal: {
          type: 'boolean',
        },
        orderBy: {
          type: 'string',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
        },
        prev: {
          type: 'integer',
          format: 'int32',
        },
        total: {
          type: 'integer',
          format: 'int64',
        },
        totalPage: {
          type: 'integer',
          format: 'int32',
        },
      },
      title: 'Page«磨耳朵分页列表响应 model»',
    },
    'Page«补偿申请分页查询结果 model»': {
      type: 'object',
      properties: {
        disabled: {
          type: 'boolean',
        },
        first: {
          type: 'integer',
          format: 'int32',
        },
        firstPage: {
          type: 'boolean',
        },
        firstResult: {
          type: 'integer',
          format: 'int32',
        },
        funcName: {
          type: 'string',
        },
        funcParam: {
          type: 'string',
        },
        html: {
          type: 'string',
        },
        last: {
          type: 'integer',
          format: 'int32',
        },
        lastPage: {
          type: 'boolean',
        },
        list: {
          type: 'array',
          items: {
            $ref: '#/definitions/补偿申请分页查询结果 model',
          },
        },
        maxResults: {
          type: 'integer',
          format: 'int32',
        },
        next: {
          type: 'integer',
          format: 'int32',
        },
        notTotal: {
          type: 'boolean',
        },
        orderBy: {
          type: 'string',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
        },
        prev: {
          type: 'integer',
          format: 'int32',
        },
        total: {
          type: 'integer',
          format: 'int64',
        },
        totalPage: {
          type: 'integer',
          format: 'int32',
        },
      },
      title: 'Page«补偿申请分页查询结果 model»',
    },
    'Page«课程返回model»': {
      type: 'object',
      properties: {
        disabled: {
          type: 'boolean',
        },
        first: {
          type: 'integer',
          format: 'int32',
        },
        firstPage: {
          type: 'boolean',
        },
        firstResult: {
          type: 'integer',
          format: 'int32',
        },
        funcName: {
          type: 'string',
        },
        funcParam: {
          type: 'string',
        },
        html: {
          type: 'string',
        },
        last: {
          type: 'integer',
          format: 'int32',
        },
        lastPage: {
          type: 'boolean',
        },
        list: {
          type: 'array',
          items: {
            $ref: '#/definitions/课程返回model',
          },
        },
        maxResults: {
          type: 'integer',
          format: 'int32',
        },
        next: {
          type: 'integer',
          format: 'int32',
        },
        notTotal: {
          type: 'boolean',
        },
        orderBy: {
          type: 'string',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
        },
        prev: {
          type: 'integer',
          format: 'int32',
        },
        total: {
          type: 'integer',
          format: 'int64',
        },
        totalPage: {
          type: 'integer',
          format: 'int32',
        },
      },
      title: 'Page«课程返回model»',
    },
    'Page«课节查询model»': {
      type: 'object',
      properties: {
        disabled: {
          type: 'boolean',
        },
        first: {
          type: 'integer',
          format: 'int32',
        },
        firstPage: {
          type: 'boolean',
        },
        firstResult: {
          type: 'integer',
          format: 'int32',
        },
        funcName: {
          type: 'string',
        },
        funcParam: {
          type: 'string',
        },
        html: {
          type: 'string',
        },
        last: {
          type: 'integer',
          format: 'int32',
        },
        lastPage: {
          type: 'boolean',
        },
        list: {
          type: 'array',
          items: {
            $ref: '#/definitions/课节查询model',
          },
        },
        maxResults: {
          type: 'integer',
          format: 'int32',
        },
        next: {
          type: 'integer',
          format: 'int32',
        },
        notTotal: {
          type: 'boolean',
        },
        orderBy: {
          type: 'string',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
        },
        prev: {
          type: 'integer',
          format: 'int32',
        },
        total: {
          type: 'integer',
          format: 'int64',
        },
        totalPage: {
          type: 'integer',
          format: 'int32',
        },
      },
      title: 'Page«课节查询model»',
    },
    'Page«账本日志 model»': {
      type: 'object',
      properties: {
        disabled: {
          type: 'boolean',
        },
        first: {
          type: 'integer',
          format: 'int32',
        },
        firstPage: {
          type: 'boolean',
        },
        firstResult: {
          type: 'integer',
          format: 'int32',
        },
        funcName: {
          type: 'string',
        },
        funcParam: {
          type: 'string',
        },
        html: {
          type: 'string',
        },
        last: {
          type: 'integer',
          format: 'int32',
        },
        lastPage: {
          type: 'boolean',
        },
        list: {
          type: 'array',
          items: {
            $ref: '#/definitions/账本日志 model',
          },
        },
        maxResults: {
          type: 'integer',
          format: 'int32',
        },
        next: {
          type: 'integer',
          format: 'int32',
        },
        notTotal: {
          type: 'boolean',
        },
        orderBy: {
          type: 'string',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
        },
        prev: {
          type: 'integer',
          format: 'int32',
        },
        total: {
          type: 'integer',
          format: 'int64',
        },
        totalPage: {
          type: 'integer',
          format: 'int32',
        },
      },
      title: 'Page«账本日志 model»',
    },
    'Page«赠课申请分页查询结果 model»': {
      type: 'object',
      properties: {
        disabled: {
          type: 'boolean',
        },
        first: {
          type: 'integer',
          format: 'int32',
        },
        firstPage: {
          type: 'boolean',
        },
        firstResult: {
          type: 'integer',
          format: 'int32',
        },
        funcName: {
          type: 'string',
        },
        funcParam: {
          type: 'string',
        },
        html: {
          type: 'string',
        },
        last: {
          type: 'integer',
          format: 'int32',
        },
        lastPage: {
          type: 'boolean',
        },
        list: {
          type: 'array',
          items: {
            $ref: '#/definitions/赠课申请分页查询结果 model',
          },
        },
        maxResults: {
          type: 'integer',
          format: 'int32',
        },
        next: {
          type: 'integer',
          format: 'int32',
        },
        notTotal: {
          type: 'boolean',
        },
        orderBy: {
          type: 'string',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
        },
        prev: {
          type: 'integer',
          format: 'int32',
        },
        total: {
          type: 'integer',
          format: 'int64',
        },
        totalPage: {
          type: 'integer',
          format: 'int32',
        },
      },
      title: 'Page«赠课申请分页查询结果 model»',
    },
    'Page«退费申请分页查询结果 model»': {
      type: 'object',
      properties: {
        disabled: {
          type: 'boolean',
        },
        first: {
          type: 'integer',
          format: 'int32',
        },
        firstPage: {
          type: 'boolean',
        },
        firstResult: {
          type: 'integer',
          format: 'int32',
        },
        funcName: {
          type: 'string',
        },
        funcParam: {
          type: 'string',
        },
        html: {
          type: 'string',
        },
        last: {
          type: 'integer',
          format: 'int32',
        },
        lastPage: {
          type: 'boolean',
        },
        list: {
          type: 'array',
          items: {
            $ref: '#/definitions/退费申请分页查询结果 model',
          },
        },
        maxResults: {
          type: 'integer',
          format: 'int32',
        },
        next: {
          type: 'integer',
          format: 'int32',
        },
        notTotal: {
          type: 'boolean',
        },
        orderBy: {
          type: 'string',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
        },
        prev: {
          type: 'integer',
          format: 'int32',
        },
        total: {
          type: 'integer',
          format: 'int64',
        },
        totalPage: {
          type: 'integer',
          format: 'int32',
        },
      },
      title: 'Page«退费申请分页查询结果 model»',
    },
    'Page«音视频学习记录分页列表响应 model»': {
      type: 'object',
      properties: {
        disabled: {
          type: 'boolean',
        },
        first: {
          type: 'integer',
          format: 'int32',
        },
        firstPage: {
          type: 'boolean',
        },
        firstResult: {
          type: 'integer',
          format: 'int32',
        },
        funcName: {
          type: 'string',
        },
        funcParam: {
          type: 'string',
        },
        html: {
          type: 'string',
        },
        last: {
          type: 'integer',
          format: 'int32',
        },
        lastPage: {
          type: 'boolean',
        },
        list: {
          type: 'array',
          items: {
            $ref: '#/definitions/音视频学习记录分页列表响应 model',
          },
        },
        maxResults: {
          type: 'integer',
          format: 'int32',
        },
        next: {
          type: 'integer',
          format: 'int32',
        },
        notTotal: {
          type: 'boolean',
        },
        orderBy: {
          type: 'string',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
        },
        prev: {
          type: 'integer',
          format: 'int32',
        },
        total: {
          type: 'integer',
          format: 'int64',
        },
        totalPage: {
          type: 'integer',
          format: 'int32',
        },
      },
      title: 'Page«音视频学习记录分页列表响应 model»',
    },
    PhoneNumberInfoRes: {
      type: 'object',
      properties: {
        city: {
          type: 'string',
          description: '城市',
        },
        phoneNumber: {
          type: 'string',
          description: '号码',
        },
        province: {
          type: 'string',
          description: '省份',
        },
      },
      title: 'PhoneNumberInfoRes',
    },
    PptRes: {
      type: 'object',
      properties: {
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createDate: {
          type: 'string',
          format: 'date-time',
          description: '创建时间',
        },
        createUserName: {
          type: 'string',
          description: '创建人名字',
        },
        fileName: {
          type: 'string',
        },
        fileSize: {
          type: 'integer',
          format: 'int32',
        },
        fileUrl: {
          type: 'string',
        },
        id: {
          type: 'integer',
          format: 'int64',
        },
        md5: {
          type: 'string',
        },
        pageNumber: {
          type: 'integer',
          format: 'int32',
        },
        pages: {
          type: 'string',
        },
        pptKey: {
          type: 'string',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        source: {
          type: 'integer',
          format: 'int32',
        },
        state: {
          type: 'integer',
          format: 'int32',
        },
        thumb: {
          type: 'string',
        },
        transformState: {
          type: 'integer',
          format: 'int32',
        },
        uid: {
          type: 'integer',
          format: 'int64',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateDate: {
          type: 'string',
          format: 'date-time',
          description: '更新时间',
        },
        updateUserName: {
          type: 'string',
          description: '更新人名字',
        },
        uploadUid: {
          type: 'integer',
          format: 'int64',
        },
      },
      title: 'PptRes',
    },
    PreviewCouponRes: {
      type: 'object',
      properties: {
        actionParams: {
          type: 'string',
          description: '命中规则结果',
        },
        endTime: {
          type: 'string',
          format: 'date-time',
          description: '策略失效时间',
        },
        exaluateOrderDiscMoney: {
          type: 'number',
          description: '命中策略后的订单优惠金额 原始金额-成交金额',
        },
        exaluateOrderMoney: {
          type: 'number',
          description: '命中策略后的订单成交金额',
        },
        name: {
          type: 'string',
          description: '命中策略名称',
        },
        policyId: {
          type: 'integer',
          format: 'int64',
          description: '命中策略ID',
        },
        ruleId: {
          type: 'integer',
          format: 'int64',
          description: '命中规则ID',
        },
        startTime: {
          type: 'string',
          format: 'date-time',
          description: '策略生效时间',
        },
      },
      title: 'PreviewCouponRes',
    },
    ProductApproveReq: {
      type: 'object',
      required: [
        'approveResult',
      ],
      properties: {
        approveMsg: {
          type: 'string',
          description: '审核信息',
        },
        approveResult: {
          type: 'integer',
          format: 'int32',
          description: '审核结果，1-通过，0-不通过',
        },
      },
      title: 'ProductApproveReq',
    },
    QueryReq: {
      type: 'object',
      properties: {
        condition: {
          type: 'object',
          additionalProperties: {
            type: 'object',
          },
        },
        order: {
          type: 'object',
          additionalProperties: {
            type: 'string',
          },
        },
        page: {
          $ref: '#/definitions/PageRequest',
        },
      },
      title: 'QueryReq',
    },
    ResponseEntity: {
      type: 'object',
      properties: {
        headers: {
          type: 'object',
          additionalProperties: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
        },
        body: {
          type: 'object',
        },
        statusCode: {
          type: 'string',
          enum: [
            'CONTINUE',
            'SWITCHING_PROTOCOLS',
            'PROCESSING',
            'CHECKPOINT',
            'OK',
            'CREATED',
            'ACCEPTED',
            'NON_AUTHORITATIVE_INFORMATION',
            'NO_CONTENT',
            'RESET_CONTENT',
            'PARTIAL_CONTENT',
            'MULTI_STATUS',
            'ALREADY_REPORTED',
            'IM_USED',
            'MULTIPLE_CHOICES',
            'MOVED_PERMANENTLY',
            'FOUND',
            'MOVED_TEMPORARILY',
            'SEE_OTHER',
            'NOT_MODIFIED',
            'USE_PROXY',
            'TEMPORARY_REDIRECT',
            'PERMANENT_REDIRECT',
            'BAD_REQUEST',
            'UNAUTHORIZED',
            'PAYMENT_REQUIRED',
            'FORBIDDEN',
            'NOT_FOUND',
            'METHOD_NOT_ALLOWED',
            'NOT_ACCEPTABLE',
            'PROXY_AUTHENTICATION_REQUIRED',
            'REQUEST_TIMEOUT',
            'CONFLICT',
            'GONE',
            'LENGTH_REQUIRED',
            'PRECONDITION_FAILED',
            'PAYLOAD_TOO_LARGE',
            'REQUEST_ENTITY_TOO_LARGE',
            'URI_TOO_LONG',
            'REQUEST_URI_TOO_LONG',
            'UNSUPPORTED_MEDIA_TYPE',
            'REQUESTED_RANGE_NOT_SATISFIABLE',
            'EXPECTATION_FAILED',
            'I_AM_A_TEAPOT',
            'INSUFFICIENT_SPACE_ON_RESOURCE',
            'METHOD_FAILURE',
            'DESTINATION_LOCKED',
            'UNPROCESSABLE_ENTITY',
            'LOCKED',
            'FAILED_DEPENDENCY',
            'UPGRADE_REQUIRED',
            'PRECONDITION_REQUIRED',
            'TOO_MANY_REQUESTS',
            'REQUEST_HEADER_FIELDS_TOO_LARGE',
            'UNAVAILABLE_FOR_LEGAL_REASONS',
            'INTERNAL_SERVER_ERROR',
            'NOT_IMPLEMENTED',
            'BAD_GATEWAY',
            'SERVICE_UNAVAILABLE',
            'GATEWAY_TIMEOUT',
            'HTTP_VERSION_NOT_SUPPORTED',
            'VARIANT_ALSO_NEGOTIATES',
            'INSUFFICIENT_STORAGE',
            'LOOP_DETECTED',
            'BANDWIDTH_LIMIT_EXCEEDED',
            'NOT_EXTENDED',
            'NETWORK_AUTHENTICATION_REQUIRED',
          ],
        },
        statusCodeValue: {
          type: 'integer',
          format: 'int32',
        },
      },
    },
    SchoolRes: {
      type: 'object',
      properties: {
        city: {
          type: 'string',
          description: '市',
        },
        country: {
          type: 'string',
          description: '国家',
        },
        createDate: {
          type: 'string',
          format: 'date-time',
          description: '创建时间',
        },
        district: {
          type: 'string',
          description: '区',
        },
        firstLessonDate: {
          type: 'string',
          format: 'date-time',
          description: '首次开课日期',
        },
        friendsUrl: {
          type: 'string',
          description: '加好友二维码',
        },
        goodsId: {
          type: 'integer',
          format: 'int64',
          description: '商品Id',
        },
        id: {
          type: 'integer',
          format: 'int64',
          description: '渠道id',
        },
        landingPageUrl: {
          type: 'string',
          description: '落地页二维码',
        },
        name: {
          type: 'string',
          description: '学校名称',
        },
        promotAgent: {
          type: 'string',
          description: '推广商',
        },
        promotDate: {
          type: 'string',
          format: 'date-time',
          description: '推广日期',
        },
        promotId: {
          type: 'integer',
          format: 'int64',
          description: '推广人',
        },
        province: {
          type: 'string',
          description: '省',
        },
        shortName: {
          type: 'string',
          description: '学校简称',
        },
        sourceCode: {
          type: 'string',
          description: '渠道来源码:',
        },
        sourceName: {
          type: 'string',
          description: '渠道名称',
        },
        studentNum: {
          type: 'integer',
          format: 'int32',
          description: '在院人数',
        },
        studyPlanType: {
          type: 'integer',
          format: 'int32',
          description: '排课模式：0：固定，1分片，2顺延',
        },
        transitionType: {
          type: 'integer',
          format: 'int32',
          description: '转化阶段 1 推广期 2 上课期 3 转化期',
        },
        zhiyuBotId: {
          type: 'string',
          description: '企业微信号，智语推广机器人，多个时用,分割',
        },
        zhiyuType: {
          type: 'integer',
          format: 'int32',
          description: '是否随机分配智语 1 是 0 否',
        },
      },
      title: 'SchoolRes',
    },
    SessionReq: {
      type: 'object',
      properties: {
        agentUid: {
          type: 'integer',
          format: 'int64',
          description: '目前/最后接待人员',
        },
        appId: {
          type: 'integer',
          format: 'int32',
          description: '业务类型,字典：zhiyuApp',
        },
        createBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '创建开始时间',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createEndDate: {
          type: 'string',
          format: 'date-time',
          description: '创建结束时间',
        },
        name: {
          type: 'string',
          description: '姓名',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,第N页,默认1',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,每页N条记录,默认20',
        },
        queueId: {
          type: 'integer',
          format: 'int64',
          description: '目前/最后接待队列',
        },
        uid: {
          type: 'integer',
          format: 'int64',
          description: '学生/老师uid',
        },
        updateBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '更新开始时间',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateEndDate: {
          type: 'string',
          format: 'date-time',
          description: '更新结束时间',
        },
      },
      title: 'SessionReq',
    },
    SessionRes: {
      type: 'object',
      properties: {
        agentName: {
          type: 'string',
          description: '目前/最后接待人员姓名',
        },
        agentUid: {
          type: 'integer',
          format: 'int64',
          description: '目前/最后接待人员',
        },
        appId: {
          type: 'integer',
          format: 'int32',
          description: '业务类型,字典：zhiyuApp',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createDate: {
          type: 'string',
          format: 'date-time',
          description: '创建时间',
        },
        createUserName: {
          type: 'string',
          description: '创建人名字',
        },
        id: {
          type: 'integer',
          format: 'int64',
        },
        name: {
          type: 'string',
          description: '学生/老师姓名',
        },
        queueId: {
          type: 'integer',
          format: 'int64',
          description: '目前/最后接待队列',
        },
        queueName: {
          type: 'string',
          description: '目前/最后接待队列名称',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        sessionId: {
          type: 'integer',
          format: 'int64',
          description: '会话id',
        },
        status: {
          type: 'integer',
          format: 'int32',
          description: '会话状态(1-进行中)',
        },
        uid: {
          type: 'integer',
          format: 'int64',
          description: '学生/老师uid',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateDate: {
          type: 'string',
          format: 'date-time',
          description: '更新时间',
        },
        updateUserName: {
          type: 'string',
          description: '更新人名字',
        },
      },
      title: 'SessionRes',
    },
    ShareCourseOrderRes: {
      type: 'object',
      properties: {
        courseId: {
          type: 'integer',
          format: 'int64',
          description: '课程id',
        },
        courseName: {
          type: 'string',
          description: '课程名字',
        },
        orderCode: {
          type: 'string',
          description: '订单Code',
        },
        orderId: {
          type: 'integer',
          format: 'int64',
          description: '订单ID',
        },
      },
      title: 'ShareCourseOrderRes',
    },
    ShareCourseRes: {
      type: 'object',
      properties: {
        courseId: {
          type: 'integer',
          format: 'int64',
          description: '课程id',
        },
        courseName: {
          type: 'string',
          description: '课程名字',
        },
      },
      title: 'ShareCourseRes',
    },
    Sort: {
      type: 'object',
      title: 'Sort',
    },
    StandardClassAddReq: {
      type: 'object',
      required: [
        'chapterId',
        'name',
        'teachingType',
        'textBookId',
      ],
      properties: {
        chapterId: {
          type: 'integer',
          format: 'int64',
          description: '章节ID',
        },
        ext: {
          type: 'string',
          description: '教学内容扩展字段',
        },
        knowledgeIds: {
          type: 'array',
          description: '知识点ID',
          items: {
            type: 'integer',
            format: 'int64',
          },
        },
        name: {
          type: 'string',
          description: '课序名称',
        },
        teachingType: {
          type: 'integer',
          format: 'int32',
          description: '教学类型',
        },
        textBookId: {
          type: 'integer',
          format: 'int64',
          description: '教材ID',
        },
      },
      title: 'StandardClassAddReq',
    },
    StandardClassCoursewareRes: {
      type: 'object',
      properties: {
        coursewareId: {
          type: 'integer',
          format: 'int64',
          description: '课件ID',
        },
        coursewareType: {
          type: 'integer',
          format: 'int32',
          description: '课件类型',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createDate: {
          type: 'string',
          format: 'date-time',
          description: '创建时间',
        },
        createUserName: {
          type: 'string',
          description: '创建人名字',
        },
        id: {
          type: 'integer',
          format: 'int64',
        },
        name: {
          type: 'string',
          description: '课件名',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        standardClassCode: {
          type: 'string',
          description: '课序编码',
        },
        standardClassId: {
          type: 'integer',
          format: 'int64',
          description: '课序ID',
        },
        standardClassName: {
          type: 'string',
          description: '课序名',
        },
        status: {
          type: 'integer',
          format: 'int32',
          description: '审核状态 0待审核/1审核通过/2审核不通过/10废弃',
        },
        teachingType: {
          type: 'integer',
          format: 'int32',
          description: '教学类型',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateDate: {
          type: 'string',
          format: 'date-time',
          description: '更新时间',
        },
        updateUserName: {
          type: 'string',
          description: '更新人名字',
        },
        verifyBy: {
          type: 'integer',
          format: 'int64',
          description: '审核人uid',
        },
        verifyDate: {
          type: 'string',
          format: 'date-time',
          description: '审核日期',
        },
        verifyMsg: {
          type: 'string',
          description: '审核信息',
        },
        verifyUserName: {
          type: 'string',
          description: '审核人名字',
        },
      },
      title: 'StandardClassCoursewareRes',
      description: '课件返回 model',
    },
    StandardClassRes: {
      type: 'object',
      properties: {
        busiType: {
          type: 'integer',
          format: 'int32',
          description: '业务类型',
        },
        chapterId: {
          type: 'integer',
          format: 'int64',
          description: '章节ID',
        },
        code: {
          type: 'string',
          description: '课序编码',
        },
        coursewareId: {
          type: 'integer',
          format: 'int64',
          description: '课序课件ID,课件审核完后，会写该字段',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createDate: {
          type: 'string',
          format: 'date-time',
          description: '创建时间',
        },
        createUserName: {
          type: 'string',
          description: '创建人名字',
        },
        ext: {
          type: 'string',
          description: '教学内容扩展字段',
        },
        extResUrl: {
          type: 'string',
          description: '课序资源',
        },
        id: {
          type: 'integer',
          format: 'int64',
        },
        knowledgeResList: {
          type: 'array',
          description: '知识点',
          items: {
            $ref: '#/definitions/KnowledgeRes',
          },
        },
        modifyFlag: {
          type: 'integer',
          format: 'int32',
          description: '是否变动,方便前端比较审核',
        },
        name: {
          type: 'string',
          description: '课序名称',
        },
        parentChName: {
          type: 'string',
          description: '父级节点中文名',
        },
        parentEnName: {
          type: 'string',
          description: '父级节点英文名',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        seq: {
          type: 'integer',
          format: 'int32',
          description: '课序顺序,同一个级别上的序号',
        },
        teachingType: {
          type: 'integer',
          format: 'int32',
          description: '教学类型',
        },
        textBookId: {
          type: 'integer',
          format: 'int64',
          description: '教材ID',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateDate: {
          type: 'string',
          format: 'date-time',
          description: '更新时间',
        },
        updateUserName: {
          type: 'string',
          description: '更新人名字',
        },
        verifyBy: {
          type: 'integer',
          format: 'int64',
          description: '审核人uid',
        },
        verifyDate: {
          type: 'string',
          format: 'date-time',
          description: '审核日期',
        },
      },
      title: 'StandardClassRes',
      description: '课序 model',
    },
    StuAddReq: {
      type: 'object',
      required: [
        'birthday',
        'city',
        'country',
        'province',
        'realname',
        'role',
        'sex',
      ],
      properties: {
        address: {
          type: 'string',
          example: '某大街100号',
          description: '详细地址',
        },
        birthday: {
          type: 'string',
          format: 'date-time',
          example: '2018-06-01 00:00:00',
          description: '生日',
        },
        city: {
          type: 'string',
          example: '广州市',
          description: '城市代码',
        },
        country: {
          type: 'string',
          example: '中国',
          description: '国家',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
        },
        district: {
          type: 'string',
          example: '荔湾区',
          description: '区域',
        },
        engName: {
          type: 'string',
          example: 'dobee',
          description: '英文名',
        },
        family: {
          description: '家长信息',
          $ref: '#/definitions/TbStudentFamilyDto',
        },
        grade: {
          type: 'string',
          example: 1001,
          description: '年级',
        },
        intr: {
          type: 'string',
          example: '我是某某某',
          description: '简介',
        },
        province: {
          type: 'string',
          example: '广东省',
          description: '省份代码',
        },
        qq: {
          type: 'integer',
          format: 'int64',
          example: 123456,
          description: 'qq',
        },
        realname: {
          type: 'string',
          example: '雷X',
          description: '中文名',
        },
        remark: {
          type: 'string',
          minLength: 0,
          maxLength: 200,
        },
        role: {
          type: 'integer',
          format: 'int64',
          example: 1,
          description: '角色家长1，学生2',
        },
        school: {
          type: 'string',
          example: '省实验小学',
          description: '学校',
        },
        sex: {
          type: 'integer',
          format: 'int32',
          example: 1,
          description: '性别男1，女0',
        },
        type: {
          type: 'integer',
          format: 'int32',
          example: 1,
          description: '学生类型正式1，测试2',
        },
        uid: {
          type: 'integer',
          format: 'int64',
          description: 'uid',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
        },
        wechat: {
          type: 'string',
          example: 'daidai',
          description: '微信',
        },
      },
      title: 'StuAddReq',
      description: '用户对象user',
    },
    StuAddRes: {
      type: 'object',
      properties: {
        uid: {
          type: 'integer',
          format: 'int64',
          example: 50019972,
          description: 'uid',
        },
      },
      title: 'StuAddRes',
    },
    StuAllInfoRes: {
      type: 'object',
      properties: {
        address: {
          type: 'string',
          example: '某大街100号',
          description: '详细地址',
        },
        age: {
          type: 'integer',
          format: 'int32',
          example: 20,
          description: '年龄',
        },
        birthday: {
          type: 'string',
          format: 'date-time',
          example: '2018-06-01 00:00:00',
          description: '生日',
        },
        busiType: {
          type: 'integer',
          format: 'int32',
          description: '学生业务来源',
        },
        city: {
          type: 'string',
          example: '广州市',
          description: '城市代码',
        },
        country: {
          type: 'string',
          example: '中国',
          description: '国家',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createDate: {
          type: 'string',
          format: 'date-time',
          description: '创建时间',
        },
        createUserName: {
          type: 'string',
          description: '创建人名字',
        },
        district: {
          type: 'string',
          example: '荔湾区',
          description: '区域',
        },
        email: {
          type: 'string',
          example: 'zzz@yy.com',
          description: '邮箱',
        },
        engName: {
          type: 'string',
          example: 'dobee',
          description: '英文名',
        },
        familyList: {
          type: 'array',
          example: 'baba',
          description: '家长信息',
          items: {
            $ref: '#/definitions/TbStudentFamilyDto',
          },
        },
        grade: {
          type: 'string',
          example: 1001,
          description: '年级',
        },
        id: {
          type: 'integer',
          format: 'int64',
        },
        intr: {
          type: 'string',
          example: '我是某某某',
          description: '简介',
        },
        mobile: {
          type: 'string',
          example: 15612345678,
          description: '电话',
        },
        nick: {
          type: 'string',
          example: 'daidai',
          description: '昵称',
        },
        province: {
          type: 'string',
          example: '广东省',
          description: '省份代码',
        },
        qq: {
          type: 'integer',
          format: 'int64',
          example: 123456,
          description: 'qq',
        },
        realname: {
          type: 'string',
          example: '雷X',
          description: '中文名',
        },
        remark: {
          type: 'string',
          example: '备注',
          description: '备注',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        role: {
          type: 'integer',
          format: 'int64',
          example: 1,
          description: '角色家长1，学生2',
        },
        school: {
          type: 'string',
          example: '省实验小学',
          description: '学校',
        },
        sex: {
          type: 'integer',
          format: 'int32',
          example: 1,
          description: '性别男1，女0',
        },
        source: {
          type: 'string',
          example: '客户端注册',
          description: '来源',
        },
        type: {
          type: 'integer',
          format: 'int32',
          example: 1,
          description: '学生类型正式1，测试2',
        },
        uid: {
          type: 'integer',
          format: 'int64',
          description: 'uid',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateDate: {
          type: 'string',
          format: 'date-time',
          description: '更新时间',
        },
        updateUserName: {
          type: 'string',
          description: '更新人名字',
        },
        wechat: {
          type: 'string',
          example: 'daidai',
          description: '微信',
        },
      },
      title: 'StuAllInfoRes',
      description: '用户对象user',
    },
    StuEditReq: {
      type: 'object',
      required: [
        'birthday',
        'city',
        'country',
        'familyList',
        'province',
        'realname',
        'role',
        'sex',
        'uid',
      ],
      properties: {
        address: {
          type: 'string',
          example: '某大街100号',
          description: '详细地址',
        },
        birthday: {
          type: 'string',
          format: 'date-time',
          example: '2018-06-01 00:00:00',
          description: '生日',
        },
        city: {
          type: 'string',
          example: '广州市',
          description: '城市代码',
        },
        country: {
          type: 'string',
          example: '中国',
          description: '国家',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
        },
        district: {
          type: 'string',
          example: '荔湾区',
          description: '区域',
        },
        engName: {
          type: 'string',
          example: 'dobee',
          description: '英文名',
        },
        familyList: {
          type: 'array',
          description: '家长信息',
          items: {
            $ref: '#/definitions/TbStudentFamilyDto',
          },
        },
        grade: {
          type: 'string',
          example: 1001,
          description: '年级',
        },
        intr: {
          type: 'string',
          example: '我是某某某',
          description: '简介',
        },
        province: {
          type: 'string',
          example: '广东省',
          description: '省份代码',
        },
        qq: {
          type: 'integer',
          format: 'int64',
          example: 123456,
          description: 'qq',
        },
        realname: {
          type: 'string',
          example: '雷X',
          description: '中文名',
        },
        remark: {
          type: 'string',
          minLength: 0,
          maxLength: 200,
        },
        role: {
          type: 'integer',
          format: 'int64',
          example: 1,
          description: '角色家长1，学生2',
        },
        school: {
          type: 'string',
          example: '省实验小学',
          description: '学校',
        },
        sex: {
          type: 'integer',
          format: 'int32',
          example: 1,
          description: '性别男1，女0',
        },
        type: {
          type: 'integer',
          format: 'int32',
          example: 1,
          description: '学生类型正式1，测试2',
        },
        uid: {
          type: 'integer',
          format: 'int64',
          description: 'uid',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
        },
        wechat: {
          type: 'string',
          example: 'daidai',
          description: '微信',
        },
      },
      title: 'StuEditReq',
      description: '用户对象user',
    },
    StuEditRes: {
      type: 'object',
      properties: {
        success: {
          type: 'integer',
          format: 'int32',
          example: 1,
          description: '0-更新失败, 1-更新成功',
        },
      },
      title: 'StuEditRes',
    },
    StuInfoReq: {
      type: 'object',
      properties: {
        mobile: {
          type: 'string',
          example: 15802028142,
          description: 'mobile',
        },
        realname: {
          type: 'string',
          example: '张三',
          description: '学生姓名',
        },
        uid: {
          type: 'integer',
          format: 'int64',
          example: 909018971,
          description: 'uid',
        },
      },
      title: 'StuInfoReq',
    },
    StuInfoRes: {
      type: 'object',
      properties: {
        chName: {
          type: 'string',
          example: '100教育-宋佳伟',
          description: '中文名',
        },
        enName: {
          type: 'string',
          example: 'dw_songjiawei',
          description: '英文名',
        },
        lastLessonStartTime: {
          type: 'string',
          format: 'date-time',
          example: 1529489889885,
          description: '上节课结束时间',
        },
        mobile: {
          type: 'string',
          example: 18620217540,
          description: '手机号',
        },
        nextLessonStartTime: {
          type: 'string',
          format: 'date-time',
          example: 1529489889885,
          description: '下节课开始时间',
        },
        uid: {
          type: 'integer',
          format: 'int64',
          example: 50019972,
          description: 'uid',
        },
      },
      title: 'StuInfoRes',
    },
    StuManuAddReq: {
      type: 'object',
      required: [
        'birthday',
        'city',
        'country',
        'district',
        'mobile',
        'province',
        'role',
        'sex',
        'uid',
      ],
      properties: {
        address: {
          type: 'string',
          example: '某大街100号',
          description: '详细地址',
        },
        birthday: {
          type: 'string',
          format: 'date-time',
          example: '2018-06-01 00:00:00',
          description: '生日',
        },
        city: {
          type: 'string',
          example: '广州市',
          description: '城市代码',
        },
        country: {
          type: 'string',
          example: '中国',
          description: '国家',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        district: {
          type: 'string',
          example: '荔湾区',
          description: '区域',
        },
        family: {
          description: '家长信息',
          $ref: '#/definitions/TbStudentFamilyDto',
        },
        grade: {
          type: 'string',
          description: '年级',
        },
        intr: {
          type: 'string',
          example: '我是某某某',
          description: '简介',
        },
        likes: {
          type: 'string',
          description: '爱好',
        },
        mobile: {
          type: 'string',
          description: '学生电话',
        },
        nick: {
          type: 'string',
          description: '英文名',
        },
        province: {
          type: 'string',
          example: '广东省',
          description: '省份代码',
        },
        realname: {
          type: 'string',
          description: '姓名',
        },
        remark: {
          type: 'string',
          description: '备注',
        },
        role: {
          type: 'integer',
          format: 'int64',
          example: 1,
          description: '角色家长1，学生2',
        },
        school: {
          type: 'string',
          description: '学校',
        },
        sex: {
          type: 'integer',
          format: 'int32',
          example: 1,
          description: '性别男1，女0',
        },
        type: {
          type: 'integer',
          format: 'int32',
          description: '类型：0:测试 1:正式 ',
        },
        uid: {
          type: 'integer',
          format: 'int64',
          description: 'uid',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
      },
      title: 'StuManuAddReq',
      description: '用户对象user',
    },
    StudentOrderReq: {
      type: 'object',
      required: [
        'uid',
      ],
      properties: {
        createBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '创建开始时间',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createEndDate: {
          type: 'string',
          format: 'date-time',
          description: '创建结束时间',
        },
        orderCode: {
          type: 'string',
          description: '订单编号',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,第N页,默认1',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,每页N条记录,默认20',
        },
        queryAgreement: {
          type: 'boolean',
          description: '是否填充协议情况',
        },
        state: {
          type: 'integer',
          format: 'int32',
          description: '订单状态 字典：orderState',
        },
        uid: {
          type: 'integer',
          format: 'int64',
          description: '学生ID',
        },
        updateBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '更新开始时间',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateEndDate: {
          type: 'string',
          format: 'date-time',
          description: '更新结束时间',
        },
      },
      title: 'StudentOrderReq',
      description: '学生订单列表查询 model',
    },
    StudentRes: {
      type: 'object',
      properties: {
        address: {
          type: 'string',
          example: '某大街100号',
          description: '详细地址',
        },
        age: {
          type: 'integer',
          format: 'int32',
          description: '年龄',
        },
        avator: {
          type: 'string',
          description: '头像',
        },
        birthday: {
          type: 'string',
          format: 'date-time',
          description: '生日',
        },
        busiType: {
          type: 'integer',
          format: 'int32',
          description: '学生业务来源',
        },
        city: {
          type: 'string',
          description: '城市',
        },
        country: {
          type: 'string',
          description: '国家',
        },
        district: {
          type: 'string',
          example: '荔湾区',
          description: '区域',
        },
        email: {
          type: 'string',
          description: '邮件',
        },
        grade: {
          type: 'string',
          description: '年级',
        },
        imid: {
          type: 'integer',
          format: 'int64',
          description: 'imid',
        },
        intr: {
          type: 'string',
          example: '我是某某某',
          description: '简介',
        },
        likes: {
          type: 'string',
          description: '爱好',
        },
        mobile: {
          type: 'string',
          description: '手机号',
        },
        nick: {
          type: 'string',
          description: '英文名',
        },
        province: {
          type: 'string',
          description: '省份',
        },
        realname: {
          type: 'string',
          description: '名字',
        },
        remark: {
          type: 'string',
          description: '备注',
        },
        school: {
          type: 'string',
          description: '学校',
        },
        sex: {
          type: 'integer',
          format: 'int32',
          description: '性别男1, 女0',
        },
        source: {
          type: 'string',
          example: '客户端注册',
          description: '来源',
        },
        type: {
          type: 'integer',
          format: 'int32',
          description: '类型：0:测试 1:正式 ',
        },
        uid: {
          type: 'integer',
          format: 'int64',
          description: 'uid',
        },
      },
      title: 'StudentRes',
    },
    SysUserRes: {
      type: 'object',
      properties: {
        loginName: {
          type: 'string',
          description: '通行证登录名',
        },
        name: {
          type: 'string',
          description: '名字',
        },
        uid: {
          type: 'integer',
          format: 'int64',
          description: 'uid',
        },
      },
      title: 'SysUserRes',
    },
    TbBusiConfigQueryReq: {
      type: 'object',
      properties: {
        description: {
          type: 'string',
          description: '字段描述',
        },
        label: {
          type: 'string',
          description: '标签名',
        },
        status: {
          type: 'integer',
          format: 'int32',
          description: '状态:0启用 1禁用',
        },
        type: {
          type: 'string',
          description: '字典类别',
        },
      },
      title: 'TbBusiConfigQueryReq',
    },
    TbChapterDto: {
      type: 'object',
      properties: {
        chapterLevel: {
          type: 'integer',
          format: 'int32',
          description: '第一级为leven，第二级为unit，第三级为课序',
        },
        code: {
          type: 'string',
          description: '根目录到本节点的序号串，格式 00-00-00  所有前缀父id-前缀本身id,不同级别，前缀不一样',
        },
        createBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '创建开始时间',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建者uid',
        },
        createDate: {
          type: 'string',
          format: 'date-time',
          description: '创建时间',
        },
        createEndDate: {
          type: 'string',
          format: 'date-time',
          description: '创建结束时间',
        },
        createUserName: {
          type: 'string',
          description: '创建人名字',
        },
        ext: {
          type: 'string',
        },
        fromRows: {
          $ref: '#/definitions/FromRows',
        },
        id: {
          type: 'integer',
          format: 'int64',
          description: 'ID',
        },
        modifyFlag: {
          type: 'integer',
          format: 'int32',
          description: '修改标志，方便前端比较审核',
        },
        nodes: {
          type: 'array',
          items: {
            $ref: '#/definitions/TbChapterDto',
          },
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,第N页,默认1',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,每页N条记录,默认20',
        },
        parent: {
          $ref: '#/definitions/TbChapterDto',
        },
        parentId: {
          type: 'integer',
          format: 'int64',
          description: '父节点，如果为第一层节点，则为0',
        },
        parentIds: {
          type: 'string',
          description: '父节点Ids',
        },
        remarks: {
          type: 'string',
          description: '备注',
          readOnly: true,
        },
        seq: {
          type: 'integer',
          format: 'int32',
          description: '同一个level上的序号',
        },
        standardClasses: {
          type: 'array',
          items: {
            $ref: '#/definitions/TbStandardClassDto',
          },
        },
        textBookId: {
          type: 'integer',
          format: 'int64',
          description: '教材id',
        },
        textChapterChName: {
          type: 'string',
          description: '中文名',
        },
        textChapterEnName: {
          type: 'string',
          description: '英文名',
        },
        updateBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '更新开始时间',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新者uid',
        },
        updateDate: {
          type: 'string',
          format: 'date-time',
          description: '更新时间',
        },
        updateEndDate: {
          type: 'string',
          format: 'date-time',
          description: '更新结束时间',
        },
        updateUserName: {
          type: 'string',
          description: '更新人名字',
        },
        verifyBy: {
          type: 'integer',
          format: 'int64',
          description: '审核人',
        },
        verifyDate: {
          type: 'string',
          format: 'date-time',
          description: '审核时间',
        },
        version: {
          type: 'integer',
          format: 'int32',
          description: '编辑拷贝过来时版本号+1',
        },
      },
      title: 'TbChapterDto',
    },
    TbConvertibleCourseDto: {
      type: 'object',
      properties: {
        convertibleCourseId: {
          type: 'integer',
          format: 'int64',
          description: '可开课程id',
        },
        convertibleCourseName: {
          type: 'string',
          description: '可开课程名字',
        },
        status: {
          type: 'integer',
          format: 'int32',
        },
      },
      title: 'TbConvertibleCourseDto',
    },
    TbConvertibleCourseReq: {
      type: 'object',
      properties: {
        convertibleCourseId: {
          type: 'integer',
          format: 'int64',
          description: '可开课程id',
        },
        convertibleCourseName: {
          type: 'string',
          description: '可开课程名字',
        },
      },
      title: 'TbConvertibleCourseReq',
    },
    TbKnowledgeCategoryDto: {
      type: 'object',
      properties: {
        chunkCount: {
          type: 'integer',
          format: 'int32',
          description: '词块数量',
        },
        createBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '创建开始时间',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建者uid',
        },
        createDate: {
          type: 'string',
          format: 'date-time',
          description: '创建时间',
        },
        createEndDate: {
          type: 'string',
          format: 'date-time',
          description: '创建结束时间',
        },
        createUserName: {
          type: 'string',
          description: '创建人名字',
        },
        fromRows: {
          $ref: '#/definitions/FromRows',
        },
        id: {
          type: 'integer',
          format: 'int64',
          description: 'ID',
        },
        name: {
          type: 'string',
          description: '名称',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,第N页,默认1',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,每页N条记录,默认20',
        },
        parent: {
          description: '父节点',
          $ref: '#/definitions/TbKnowledgeCategoryDto',
        },
        parentId: {
          type: 'integer',
          format: 'int64',
          description: '父级id',
        },
        parentIds: {
          type: 'string',
          description: '所有父级id',
        },
        remarks: {
          type: 'string',
          description: '备注',
          readOnly: true,
        },
        sentencesCount: {
          type: 'integer',
          format: 'int32',
          description: '句子数量',
        },
        sort: {
          type: 'integer',
          format: 'int32',
          description: '排序',
        },
        status: {
          type: 'integer',
          format: 'int32',
          description: '状态',
        },
        updateBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '更新开始时间',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新者uid',
        },
        updateDate: {
          type: 'string',
          format: 'date-time',
          description: '更新时间',
        },
        updateEndDate: {
          type: 'string',
          format: 'date-time',
          description: '更新结束时间',
        },
        updateUserName: {
          type: 'string',
          description: '更新人名字',
        },
        wordsCount: {
          type: 'integer',
          format: 'int32',
          description: '单词数量',
        },
      },
      title: 'TbKnowledgeCategoryDto',
    },
    TbProductDto: {
      type: 'object',
      properties: {
        busiType: {
          type: 'integer',
          format: 'int32',
          description: '业务类型：k12初高中、低幼英语',
        },
        checkMsg: {
          type: 'string',
          description: '审核意见',
        },
        createBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '创建开始时间',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建者uid',
        },
        createDate: {
          type: 'string',
          format: 'date-time',
          description: '创建时间',
        },
        createEndDate: {
          type: 'string',
          format: 'date-time',
          description: '创建结束时间',
        },
        createUserName: {
          type: 'string',
          description: '创建人名字',
        },
        description: {
          type: 'string',
          description: '说明',
        },
        fromRows: {
          $ref: '#/definitions/FromRows',
        },
        id: {
          type: 'integer',
          format: 'int64',
          description: 'ID',
        },
        name: {
          type: 'string',
          description: '产品名称',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,第N页,默认1',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,每页N条记录,默认20',
        },
        picture: {
          type: 'string',
          description: '图片',
        },
        remarks: {
          type: 'string',
          description: '备注',
          readOnly: true,
        },
        status: {
          type: 'integer',
          format: 'int32',
          description: '产品状态 0: 新增  10 待审核 20 审核不通过 30 已发布 40 已下线',
        },
        type: {
          type: 'integer',
          format: 'int32',
          description: '产品类型0,表示录播课程，1.表示图书，2，表示试卷,3 表示直播课程',
        },
        updateBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '更新开始时间',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新者uid',
        },
        updateDate: {
          type: 'string',
          format: 'date-time',
          description: '更新时间',
        },
        updateEndDate: {
          type: 'string',
          format: 'date-time',
          description: '更新结束时间',
        },
        updateUserName: {
          type: 'string',
          description: '更新人名字',
        },
        verifyBy: {
          type: 'integer',
          format: 'int64',
          description: '审核人',
        },
        verifyByName: {
          type: 'string',
          description: '审核人姓名',
        },
        verifyDate: {
          type: 'string',
          format: 'date-time',
          description: '审核时间',
        },
      },
      title: 'TbProductDto',
    },
    TbStandardClassDto: {
      type: 'object',
      properties: {
        addrUrl: {
          type: 'string',
        },
        busiType: {
          type: 'integer',
          format: 'int32',
        },
        chapterId: {
          type: 'integer',
          format: 'int64',
          description: '章节ID',
        },
        code: {
          type: 'string',
          description: '课序编码',
        },
        coursewareId: {
          type: 'integer',
          format: 'int64',
          description: '课序课件ID,课件审核完后，会写该字段',
        },
        coursewareName: {
          type: 'string',
        },
        coursewareType: {
          type: 'integer',
          format: 'int32',
          description: '课序课件类型',
        },
        cover: {
          type: 'string',
        },
        createBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '创建开始时间',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建者uid',
        },
        createDate: {
          type: 'string',
          format: 'date-time',
          description: '创建时间',
        },
        createEndDate: {
          type: 'string',
          format: 'date-time',
          description: '创建结束时间',
        },
        createUserName: {
          type: 'string',
          description: '创建人名字',
        },
        ext: {
          type: 'string',
        },
        extResUrl: {
          type: 'string',
          description: '课序资源',
        },
        fromRows: {
          $ref: '#/definitions/FromRows',
        },
        id: {
          type: 'integer',
          format: 'int64',
          description: 'ID',
        },
        knowledgeIds: {
          type: 'array',
          items: {
            type: 'integer',
            format: 'int64',
          },
        },
        modifyFlag: {
          type: 'integer',
          format: 'int32',
          description: '是否变动,方便前端比较审核',
        },
        name: {
          type: 'string',
          description: '课序名称',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,第N页,默认1',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,每页N条记录,默认20',
        },
        pptKey: {
          type: 'string',
        },
        remarks: {
          type: 'string',
          description: '备注',
          readOnly: true,
        },
        seq: {
          type: 'integer',
          format: 'int32',
          description: '课序顺序,同一个级别上的序号',
        },
        standardClassCode: {
          type: 'string',
        },
        teachingType: {
          type: 'integer',
          format: 'int32',
          description: '教学类型',
        },
        textBookCode: {
          type: 'string',
        },
        textBookId: {
          type: 'integer',
          format: 'int64',
          description: '教材ID',
        },
        textBookName: {
          type: 'string',
          description: '教材名称',
        },
        updateBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '更新开始时间',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新者uid',
        },
        updateDate: {
          type: 'string',
          format: 'date-time',
          description: '更新时间',
        },
        updateEndDate: {
          type: 'string',
          format: 'date-time',
          description: '更新结束时间',
        },
        updateUserName: {
          type: 'string',
          description: '更新人名字',
        },
        verifyBy: {
          type: 'integer',
          format: 'int64',
          description: '审核人uid',
        },
        verifyDate: {
          type: 'string',
          format: 'date-time',
          description: '审核日期',
        },
      },
      title: 'TbStandardClassDto',
    },
    TbStudentFamilyDto: {
      type: 'object',
      properties: {
        createBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '创建开始时间',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建者uid',
        },
        createDate: {
          type: 'string',
          format: 'date-time',
          description: '创建时间',
        },
        createEndDate: {
          type: 'string',
          format: 'date-time',
          description: '创建结束时间',
        },
        createUserName: {
          type: 'string',
          description: '创建人名字',
        },
        fromRows: {
          $ref: '#/definitions/FromRows',
        },
        id: {
          type: 'integer',
          format: 'int64',
          description: 'ID',
        },
        name: {
          type: 'string',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,第N页,默认1',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,每页N条记录,默认20',
        },
        phone: {
          type: 'string',
        },
        qq: {
          type: 'integer',
          format: 'int64',
        },
        relation: {
          type: 'integer',
          format: 'int32',
        },
        remark: {
          type: 'string',
        },
        remarks: {
          type: 'string',
          description: '备注',
          readOnly: true,
        },
        type: {
          type: 'integer',
          format: 'int32',
        },
        uid: {
          type: 'integer',
          format: 'int64',
        },
        updateBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '更新开始时间',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新者uid',
        },
        updateDate: {
          type: 'string',
          format: 'date-time',
          description: '更新时间',
        },
        updateEndDate: {
          type: 'string',
          format: 'date-time',
          description: '更新结束时间',
        },
        updateUserName: {
          type: 'string',
          description: '更新人名字',
        },
        wayOfViewMsg: {
          type: 'integer',
          format: 'int32',
        },
        wayOfViewMsgList: {
          type: 'array',
          items: {
            type: 'boolean',
          },
        },
        wechat: {
          type: 'string',
        },
      },
      title: 'TbStudentFamilyDto',
    },
    TeacherAddReq: {
      type: 'object',
      required: [
        'city',
        'country',
        'courseIdList',
        'diploma',
        'email',
        'mobile',
        'province',
        'realname',
        'sex',
        'teachAge',
      ],
      properties: {
        avator: {
          type: 'string',
          description: '头像',
        },
        birthday: {
          type: 'string',
          format: 'date-time',
          description: '出生年月',
        },
        city: {
          type: 'string',
          description: '城市',
        },
        comment: {
          type: 'string',
          description: '备注',
          minLength: 0,
          maxLength: 200,
        },
        country: {
          type: 'string',
          description: '国家',
        },
        courseId: {
          type: 'integer',
          format: 'int64',
          description: '课程id',
        },
        courseIdList: {
          type: 'array',
          description: '课程list',
          items: {
            type: 'integer',
            format: 'int64',
            minimum: 1,
            maximum: 2147483647,
          },
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        diploma: {
          type: 'string',
          description: '学历，字典：diploma',
        },
        diplomaPic: {
          type: 'string',
          description: '学历照片URL',
        },
        email: {
          type: 'string',
          description: '邮箱',
        },
        idCard: {
          type: 'string',
          description: '身份证件号码',
        },
        idType: {
          type: 'integer',
          format: 'int32',
          description: '身份证件类型',
        },
        jobTitle: {
          type: 'integer',
          format: 'int32',
          description: '职称，字典：jobTitle',
        },
        mobile: {
          type: 'string',
          description: '老师电话',
        },
        nick: {
          type: 'string',
          description: '老师昵称',
        },
        province: {
          type: 'string',
          description: '省市',
        },
        realname: {
          type: 'string',
          description: '老师姓名',
        },
        reason: {
          type: 'string',
          description: '添加理由',
        },
        school: {
          type: 'string',
          description: '毕业学校',
        },
        selfIntro: {
          type: 'string',
          description: '自我介绍',
          minLength: 0,
          maxLength: 200,
        },
        sex: {
          type: 'integer',
          format: 'int32',
          description: '性别',
        },
        state: {
          type: 'integer',
          format: 'int32',
          description: '老师状态：0:正常 10:冻结 20 解约',
        },
        subjectId: {
          type: 'integer',
          format: 'int32',
          description: '科目ID',
        },
        subjectName: {
          type: 'string',
          description: '科目名称',
        },
        teachAge: {
          type: 'string',
          description: '教龄',
        },
        teachingSchool: {
          type: 'string',
          description: '任教学校',
        },
        type: {
          type: 'integer',
          format: 'int32',
          description: '老师类型 1 正式老师 2 MOCK老师 3全职老师，字典：teacherType',
        },
        uid: {
          type: 'integer',
          format: 'int64',
          description: '老师uid',
        },
      },
      title: 'TeacherAddReq',
      description: '老师新增Req model',
    },
    TeacherCourseAddReq: {
      type: 'object',
      required: [
        'courseIdList',
        'tuid',
      ],
      properties: {
        courseIdList: {
          type: 'array',
          description: '课程id列表',
          items: {
            type: 'integer',
            format: 'int64',
            minimum: 1,
            maximum: 2147483647,
          },
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        tuid: {
          type: 'integer',
          format: 'int64',
          description: '老师uid',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
      },
      title: 'TeacherCourseAddReq',
      description: '老师课程新增Req model',
    },
    TeacherCourseDeleteReq: {
      type: 'object',
      required: [
        'courseId',
        'tuid',
      ],
      properties: {
        courseId: {
          type: 'integer',
          format: 'int64',
          description: '课程id',
        },
        tuid: {
          type: 'integer',
          format: 'int64',
          description: '老师uid',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
      },
      title: 'TeacherCourseDeleteReq',
      description: '老师课程删除Req model',
    },
    TeacherCourseRes: {
      type: 'object',
      properties: {
        cname: {
          type: 'string',
          description: '课程名',
        },
        courseId: {
          type: 'integer',
          format: 'int64',
          description: '课程id',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createDate: {
          type: 'string',
          format: 'date-time',
          description: '创建时间',
        },
        createUserName: {
          type: 'string',
          description: '创建人名字',
        },
        id: {
          type: 'integer',
          format: 'int64',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        state: {
          type: 'integer',
          format: 'int32',
          description: '解绑状态：1:不可解绑 0:可解绑，数据字典：bindState',
        },
        tuid: {
          type: 'integer',
          format: 'int64',
          description: '老师uid',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateDate: {
          type: 'string',
          format: 'date-time',
          description: '更新时间',
        },
        updateUserName: {
          type: 'string',
          description: '更新人名字',
        },
      },
      title: 'TeacherCourseRes',
      description: '课程老师新增Req model',
    },
    TeacherReq: {
      type: 'object',
      required: [
        'pageNo',
        'pageSize',
      ],
      properties: {
        courseId: {
          type: 'integer',
          format: 'int64',
          description: '课程id',
        },
        delFlag: {
          type: 'integer',
          format: 'int32',
        },
        mobile: {
          type: 'string',
          description: '老师电话',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
          description: '页数',
          minimum: 1.0,
          exclusiveMinimum: false,
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
          description: '页码',
          minimum: 1.0,
          exclusiveMinimum: false,
        },
        realname: {
          type: 'string',
          description: '老师姓名',
        },
        tuid: {
          type: 'integer',
          format: 'int64',
          description: '老师uid',
        },
      },
      title: 'TeacherReq',
    },
    TeacherRes: {
      type: 'object',
      properties: {
        age: {
          type: 'integer',
          format: 'int32',
          description: '年龄',
        },
        avator: {
          type: 'string',
          description: '头像',
        },
        birthday: {
          type: 'string',
          format: 'date-time',
          description: '生日',
        },
        city: {
          type: 'string',
          description: '城市',
        },
        comment: {
          type: 'string',
          description: '备注',
        },
        country: {
          type: 'string',
          description: '国家',
        },
        courseInfoList: {
          type: 'array',
          description: '绑定课程列表',
          items: {
            $ref: '#/definitions/TeacherCourseRes',
          },
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createDate: {
          type: 'string',
          format: 'date-time',
          description: '创建时间',
        },
        createUserName: {
          type: 'string',
          description: '创建人名字',
        },
        diploma: {
          type: 'string',
          description: '学历，字典：diploma',
        },
        diplomaPic: {
          type: 'string',
          description: '学历照片URL',
        },
        email: {
          type: 'string',
          description: '邮箱',
        },
        id: {
          type: 'integer',
          format: 'int64',
        },
        idCard: {
          type: 'string',
          description: '身份证件号码',
        },
        idType: {
          type: 'integer',
          format: 'int32',
          description: '身份证件类型',
        },
        intr: {
          type: 'string',
          description: '介绍',
        },
        jobTitle: {
          type: 'integer',
          format: 'int32',
          description: '职称，字典：jobTitle',
        },
        mobile: {
          type: 'string',
          description: '电话号码',
        },
        nick: {
          type: 'string',
          description: '老师昵称',
        },
        province: {
          type: 'string',
          description: '省市',
        },
        realname: {
          type: 'string',
          description: '老师姓名',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        role: {
          type: 'integer',
          format: 'int64',
          description: '角色',
        },
        school: {
          type: 'string',
          description: '毕业学校',
        },
        selfIntro: {
          type: 'string',
          description: '简介',
        },
        sex: {
          type: 'integer',
          format: 'int32',
          description: '性别，字典：sex',
        },
        source: {
          type: 'integer',
          format: 'int32',
          description: '老师来源',
        },
        subjectId: {
          type: 'integer',
          format: 'int32',
          description: '科目ID',
        },
        subjectName: {
          type: 'string',
          description: '科目名称',
        },
        teachAge: {
          type: 'string',
          description: '教龄',
        },
        teachingSchool: {
          type: 'string',
          description: '任教学校',
        },
        type: {
          type: 'integer',
          format: 'int32',
          description: '老师类型 1 正式老师 2 MOCK老师 3全职老师，字典：teacherType',
        },
        uid: {
          type: 'integer',
          format: 'int64',
          description: '老师uid',
        },
        uids: {
          type: 'array',
          items: {
            type: 'integer',
            format: 'int64',
          },
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateDate: {
          type: 'string',
          format: 'date-time',
          description: '更新时间',
        },
        updateUserName: {
          type: 'string',
          description: '更新人名字',
        },
      },
      title: 'TeacherRes',
      description: '老师Res model',
    },
    TeacherUpdateReq: {
      type: 'object',
      required: [
        'city',
        'country',
        'courseIdList',
        'diploma',
        'email',
        'mobile',
        'province',
        'realname',
        'sex',
        'teachAge',
        'uid',
      ],
      properties: {
        avator: {
          type: 'string',
          description: '头像url',
        },
        birthday: {
          type: 'string',
          format: 'date-time',
          description: '出生年月',
        },
        city: {
          type: 'string',
          description: '城市',
        },
        comment: {
          type: 'string',
          description: '备注',
        },
        country: {
          type: 'string',
          description: '国家',
        },
        courseId: {
          type: 'integer',
          format: 'int64',
          description: '课程id',
        },
        courseIdList: {
          type: 'array',
          description: '课程list',
          items: {
            type: 'integer',
            format: 'int64',
            minimum: 1,
            maximum: 2147483647,
          },
        },
        diploma: {
          type: 'string',
          description: '学历',
        },
        diplomaPic: {
          type: 'string',
          description: '学历照片URL',
        },
        email: {
          type: 'string',
          description: '邮箱',
        },
        idCard: {
          type: 'string',
          description: '身份证件号码',
        },
        idType: {
          type: 'integer',
          format: 'int32',
          description: '身份证件类型',
        },
        jobTitle: {
          type: 'integer',
          format: 'int32',
          description: '职称',
        },
        mobile: {
          type: 'string',
          description: '老师电话',
        },
        nick: {
          type: 'string',
          description: '老师昵称',
        },
        province: {
          type: 'string',
          description: '省市',
        },
        realname: {
          type: 'string',
          description: '老师姓名',
        },
        reason: {
          type: 'string',
          description: '添加理由',
        },
        school: {
          type: 'string',
          description: '毕业学校',
        },
        selfIntro: {
          type: 'string',
          description: '自我介绍',
        },
        sex: {
          type: 'integer',
          format: 'int32',
          description: '性别',
        },
        state: {
          type: 'integer',
          format: 'int32',
          description: '老师状态：0:正常 10:冻结 20 解约',
        },
        subjectId: {
          type: 'integer',
          format: 'int32',
          description: '科目ID',
        },
        subjectName: {
          type: 'string',
          description: '科目名称',
        },
        teachAge: {
          type: 'string',
          description: '教龄',
        },
        teachingSchool: {
          type: 'string',
          description: '任教学校',
        },
        type: {
          type: 'integer',
          format: 'int32',
          description: '老师类型 1 正式老师 2 MOCK老师 3全职老师，字典：teacherType',
        },
        uid: {
          type: 'integer',
          format: 'int64',
          description: '老师uid',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
      },
      title: 'TeacherUpdateReq',
      description: '老师修改Req model',
    },
    TextBookApproveParam: {
      type: 'object',
      properties: {
        approveMsg: {
          type: 'string',
        },
        approveResult: {
          type: 'integer',
          format: 'int32',
        },
        textBookId: {
          type: 'integer',
          format: 'int64',
        },
        verifyBy: {
          type: 'integer',
          format: 'int64',
        },
      },
      title: 'TextBookApproveParam',
    },
    ThirdAppRes: {
      type: 'object',
      properties: {
        appId: {
          type: 'string',
          description: '微信平台为我方提供标志:wx**********',
        },
        appName: {
          type: 'string',
          description: ' // 应用名称',
        },
        appType: {
          type: 'string',
          description: '对业务暴露的公众号标志,如：tomabcStudent,k12Student',
        },
        busiType: {
          type: 'integer',
          format: 'int32',
          description: '该公众号所属业务：1 低幼，3 k12',
        },
        remarks: {
          type: 'string',
          description: '// 备注',
        },
        thirdMainBody: {
          type: 'integer',
          format: 'int32',
          description: '//第三方主体，1：三人行壹佰教育，2：次时代教育',
        },
        thirdMainName: {
          type: 'string',
          description: '//第三方主体名称',
        },
        thirdType: {
          type: 'string',
          description: '//第三方类型 web,wxmp,wxminiprogram',
        },
      },
      title: 'ThirdAppRes',
      description: '第三方app model',
    },
    TransferReq: {
      type: 'object',
      required: [
        'appId',
        'fromAgentUid',
        'toQueueId',
        'uid',
      ],
      properties: {
        appId: {
          type: 'integer',
          format: 'int32',
          description: 'appid,字典：zhiyuApp',
        },
        content: {
          type: 'string',
          description: '留言',
        },
        fromAgentUid: {
          type: 'integer',
          format: 'int64',
          description: '发起转接的坐席uid',
        },
        toAgentUid: {
          type: 'integer',
          format: 'int64',
          description: '接收转接的坐席uid',
        },
        toQueueId: {
          type: 'integer',
          format: 'int64',
          description: '接收转接的队列id',
        },
        uid: {
          type: 'integer',
          format: 'int64',
          description: '学生/老师uid',
        },
      },
      title: 'TransferReq',
    },
    UserRes: {
      type: 'object',
      properties: {
        attachuid: {
          type: 'integer',
          format: 'int64',
        },
        mobile: {
          type: 'string',
        },
        nick: {
          type: 'string',
        },
        realname: {
          type: 'string',
        },
        role: {
          type: 'integer',
          format: 'int32',
        },
        sex: {
          type: 'string',
        },
        uid: {
          type: 'integer',
          format: 'int64',
        },
      },
      title: 'UserRes',
    },
    产品信息新增model: {
      type: 'object',
      required: [
        'busiType',
        'name',
      ],
      properties: {
        busiType: {
          type: 'integer',
          format: 'int32',
          description: '业务类型：k12初高中、低幼英语',
        },
        name: {
          type: 'string',
          description: '产品名称',
        },
        type: {
          type: 'integer',
          format: 'int32',
          description: '产品类型0,表示录播课程，1.表示图书，2，表示试卷,3 表示直播课程',
        },
      },
      title: '产品信息新增model',
    },
    产品信息查询对象: {
      type: 'object',
      properties: {
        busiType: {
          type: 'integer',
          format: 'int32',
          description: '业务类型：k12初高中、低幼英语',
        },
        name: {
          type: 'string',
          description: '产品名称',
        },
        status: {
          type: 'integer',
          format: 'int32',
          description: '产品状态 0: 新增  10 待审核 20 审核不通过 30 已发布 40 已下线',
        },
        type: {
          type: 'integer',
          format: 'int32',
          description: '产品类型0,表示录播课程，1.表示图书，2，表示试卷,3 表示直播课程',
        },
        verifyBy: {
          type: 'integer',
          format: 'int64',
          description: '审核人',
        },
      },
      title: '产品信息查询对象',
    },
    修改座席状态: {
      type: 'object',
      required: [
        'id',
        'status',
      ],
      properties: {
        id: {
          type: 'integer',
          format: 'int64',
          description: '座席id',
        },
        status: {
          type: 'integer',
          format: 'int32',
          description: '座席状态，字典：agentStatus',
        },
      },
      title: '修改座席状态',
    },
    共享课程请求model: {
      type: 'object',
      properties: {
        courseId: {
          type: 'integer',
          format: 'int64',
          description: '课程id',
        },
        uid: {
          type: 'integer',
          format: 'int64',
          description: '学生UID',
        },
        withSelf: {
          type: 'boolean',
          description: '是否返回自身',
        },
      },
      title: '共享课程请求model',
    },
    '内容库分类 model': {
      type: 'object',
      properties: {
        chunkCount: {
          type: 'integer',
          format: 'int32',
          description: '词块数量',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createDate: {
          type: 'string',
          format: 'date-time',
          description: '创建时间',
        },
        createUserName: {
          type: 'string',
          description: '创建人名字',
        },
        id: {
          type: 'integer',
          format: 'int64',
        },
        name: {
          type: 'string',
          description: '名称',
        },
        parent: {
          description: '父节点',
          $ref: '#/definitions/内容库分类 model',
        },
        parentId: {
          type: 'integer',
          format: 'int64',
          description: '父级id',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        sentencesCount: {
          type: 'integer',
          format: 'int32',
          description: '句子数量',
        },
        sort: {
          type: 'integer',
          format: 'int32',
          description: '排序',
        },
        status: {
          type: 'integer',
          format: 'int32',
          description: '状态',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateDate: {
          type: 'string',
          format: 'date-time',
          description: '更新时间',
        },
        updateUserName: {
          type: 'string',
          description: '更新人名字',
        },
        wordsCount: {
          type: 'integer',
          format: 'int32',
          description: '单词数量',
        },
      },
      title: '内容库分类 model',
    },
    '内容库分类新增 model': {
      type: 'object',
      required: [
        'name',
      ],
      properties: {
        id: {
          type: 'integer',
          format: 'int64',
          description: 'id，新增时不需要传',
        },
        name: {
          type: 'string',
          description: '名字',
        },
        parentId: {
          type: 'integer',
          format: 'int64',
          description: '父节点id',
        },
        remarks: {
          type: 'string',
          description: '备注,选填',
        },
        status: {
          type: 'integer',
          format: 'int32',
          description: '状态',
        },
      },
      title: '内容库分类新增 model',
    },
    '内容库分类查询 model': {
      type: 'object',
      properties: {
        createBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '创建开始时间',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createEndDate: {
          type: 'string',
          format: 'date-time',
          description: '创建结束时间',
        },
        name: {
          type: 'string',
          description: '名字',
          minLength: 0,
          maxLength: 100,
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,第N页,默认1',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,每页N条记录,默认20',
        },
        status: {
          type: 'integer',
          format: 'int32',
          description: '状态',
          minimum: 0.0,
          exclusiveMinimum: false,
        },
        updateBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '更新开始时间',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateEndDate: {
          type: 'string',
          format: 'date-time',
          description: '更新结束时间',
        },
      },
      title: '内容库分类查询 model',
    },
    '内容库新增 model': {
      type: 'object',
      required: [
        'name',
      ],
      properties: {
        name: {
          type: 'string',
          description: '名字',
        },
        parentId: {
          type: 'integer',
          format: 'int64',
          description: '父节点id',
        },
        remarks: {
          type: 'string',
          description: '备注,选填',
        },
        status: {
          type: 'integer',
          format: 'int32',
          description: '状态',
        },
      },
      title: '内容库新增 model',
    },
    '切课 model': {
      type: 'object',
      required: [
        'courseId',
        'standardClassId',
        'uid',
      ],
      properties: {
        courseId: {
          type: 'integer',
          format: 'int64',
          description: '课程ID',
          minimum: 1.0,
          exclusiveMinimum: false,
        },
        standardClassId: {
          type: 'integer',
          format: 'int64',
          description: '课序ID',
          minimum: 1.0,
          exclusiveMinimum: false,
        },
        uid: {
          type: 'integer',
          format: 'int64',
          description: '学生ID',
          minimum: 1.0,
          exclusiveMinimum: false,
        },
      },
      title: '切课 model',
    },
    '切课检查 model': {
      type: 'object',
      properties: {
        cycleStandardClass: {
          type: 'boolean',
        },
        lessoning: {
          type: 'boolean',
          description: '是否上课中',
        },
        needCancelLessonNum: {
          type: 'integer',
          format: 'int32',
          description: '需要手动取消的课节数',
        },
        standard1V1: {
          type: 'boolean',
        },
        standardClassNotEnough: {
          type: 'boolean',
          description: '是否课序不足',
        },
      },
      title: '切课检查 model',
    },
    '创建补偿申请 model': {
      type: 'object',
      required: [
        'attachment',
        'lessonId',
        'lessonNum',
        'reason',
        'responsibleParty',
      ],
      properties: {
        attachment: {
          type: 'string',
          description: '图片url,json数组字符串',
          minLength: 0,
          maxLength: 250,
        },
        lessonId: {
          type: 'integer',
          format: 'int64',
          description: '课节ID',
          minimum: 1.0,
          exclusiveMinimum: false,
        },
        lessonNum: {
          type: 'integer',
          format: 'int32',
          description: '补偿课时数',
        },
        reason: {
          type: 'integer',
          format: 'int32',
          description: '补偿原因，字典：compenReason',
        },
        remarks: {
          type: 'string',
          description: '补偿原因详述',
          minLength: 0,
          maxLength: 200,
        },
        responsibleParty: {
          type: 'integer',
          format: 'int32',
          description: '补偿责任方，字典：compenResponsibleParty',
        },
      },
      title: '创建补偿申请 model',
    },
    '创建赠课申请 model': {
      type: 'object',
      required: [
        'attachment',
        'courseId',
        'lessonNum',
        'orderId',
        'reason',
      ],
      properties: {
        attachment: {
          type: 'string',
          description: '图片url,json数组字符串',
          minLength: 0,
          maxLength: 250,
        },
        courseId: {
          type: 'integer',
          format: 'int64',
          description: '课程ID',
          minimum: 1.0,
          exclusiveMinimum: false,
        },
        lessonNum: {
          type: 'integer',
          format: 'int32',
          description: '赠送课时数',
        },
        orderId: {
          type: 'integer',
          format: 'int64',
          description: '订单Id',
          minimum: 1.0,
          exclusiveMinimum: false,
        },
        reason: {
          type: 'integer',
          format: 'int32',
          description: '赠课原因，字典：giftReason',
        },
        remarks: {
          type: 'string',
          description: '赠课原因详述',
          minLength: 0,
          maxLength: 200,
        },
      },
      title: '创建赠课申请 model',
    },
    '协议上下线 model': {
      type: 'object',
      required: [
        'operType',
        'productId',
      ],
      properties: {
        operType: {
          type: 'integer',
          format: 'int32',
          description: '操作类型， 30：发布 40：下线',
        },
        productId: {
          type: 'integer',
          format: 'int64',
          description: '产品id，这里是协议ID',
        },
      },
      title: '协议上下线 model',
    },
    协议分页请求实体: {
      type: 'object',
      properties: {
        busiType: {
          type: 'integer',
          format: 'int32',
          description: '业务类型,字典：busiType',
        },
        createBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '创建开始时间',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createEndDate: {
          type: 'string',
          format: 'date-time',
          description: '创建结束时间',
        },
        id: {
          type: 'integer',
          format: 'int64',
          description: '协议ID',
        },
        name: {
          type: 'string',
          description: '协议名字',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,第N页,默认1',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,每页N条记录,默认20',
        },
        status: {
          type: 'integer',
          format: 'int32',
          description: '协议状态: 30：发布 40：下线',
        },
        updateBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '更新开始时间',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateEndDate: {
          type: 'string',
          format: 'date-time',
          description: '更新结束时间',
        },
      },
      title: '协议分页请求实体',
    },
    协议分页返回实体: {
      type: 'object',
      properties: {
        busiType: {
          type: 'integer',
          format: 'int32',
          description: '业务类型,字典：busiType',
        },
        content: {
          type: 'string',
          description: '协议内容url',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createDate: {
          type: 'string',
          format: 'date-time',
          description: '创建时间',
        },
        createUserName: {
          type: 'string',
          description: '创建人名字',
        },
        id: {
          type: 'integer',
          format: 'int64',
        },
        name: {
          type: 'string',
          description: '协议名称',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        status: {
          type: 'integer',
          format: 'int32',
          description: '状态 ,30：发布 40：下线',
        },
        type: {
          type: 'integer',
          format: 'int32',
          description: '协议类型',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateDate: {
          type: 'string',
          format: 'date-time',
          description: '更新时间',
        },
        updateUserName: {
          type: 'string',
          description: '更新人名字',
        },
      },
      title: '协议分页返回实体',
    },
    协议添加实体: {
      type: 'object',
      required: [
        'busiType',
        'content',
        'name',
        'type',
      ],
      properties: {
        busiType: {
          type: 'integer',
          format: 'int32',
          description: '业务类型',
        },
        content: {
          type: 'string',
          description: '协议url',
          minLength: 0,
          maxLength: 120,
        },
        name: {
          type: 'string',
          description: '协议名称，也是产品名称',
          minLength: 0,
          maxLength: 120,
        },
        type: {
          type: 'integer',
          format: 'int32',
          description: '协议类型:1 一般',
        },
      },
      title: '协议添加实体',
    },
    '发短信 req': {
      type: 'object',
      properties: {
        content: {
          type: 'string',
          description: '短信内容',
          minLength: 1,
          maxLength: 200,
        },
        phone: {
          type: 'string',
          description: '手机号',
          minLength: 11,
          maxLength: 11,
        },
      },
      title: '发短信 req',
    },
    '发送课后点评报告 req': {
      type: 'object',
      properties: {
        icon: {
          type: 'string',
          description: '图片地址',
        },
        link: {
          type: 'string',
          description: '链接地址',
        },
        subtitle: {
          type: 'string',
          description: '副标题',
        },
        title: {
          type: 'string',
          description: '主标题',
        },
        uid: {
          type: 'integer',
          format: 'int64',
          description: '用户Id',
        },
      },
      title: '发送课后点评报告 req',
    },
    '取消课节 model': {
      type: 'object',
      required: [
        'cancelReason',
        'id',
      ],
      properties: {
        cancelReason: {
          type: 'string',
          description: '取消原因',
        },
        cancelRemark: {
          type: 'string',
          description: '取消备注',
        },
        id: {
          type: 'integer',
          format: 'int64',
          description: '课节ID',
          minimum: 1.0,
          exclusiveMinimum: false,
        },
      },
      title: '取消课节 model',
    },
    '可开课程 model': {
      type: 'object',
      properties: {
        convertibleCourseId: {
          type: 'integer',
          format: 'int64',
          description: '可开课程id',
        },
        convertibleCourseName: {
          type: 'string',
          description: '可开课程名字',
        },
        status: {
          type: 'integer',
          format: 'int32',
          description: '课程状态',
        },
      },
      title: '可开课程 model',
    },
    '商品 model': {
      type: 'object',
      properties: {
        attachment: {
          type: 'string',
          description: '附件',
        },
        busiType: {
          type: 'integer',
          format: 'int32',
          description: '类型busiType, k12初高中、低幼英语，字典:busiType',
        },
        checkMsg: {
          type: 'string',
          description: '审核意见',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createDate: {
          type: 'string',
          format: 'date-time',
          description: '创建时间',
        },
        createUserName: {
          type: 'string',
          description: '创建人名字',
        },
        goodsName: {
          type: 'string',
          description: '商品名称',
        },
        goodsProductList: {
          type: 'array',
          description: '课程列表',
          items: {
            $ref: '#/definitions/GoodsProductRes',
          },
        },
        id: {
          type: 'integer',
          format: 'int64',
        },
        oriPrice: {
          type: 'number',
          description: '商品金额 原价格',
        },
        payPeriod: {
          type: 'integer',
          format: 'int32',
          description: '支付有效期，单位：分钟',
        },
        payPeriodDate: {
          type: 'string',
          format: 'date-time',
        },
        price: {
          type: 'number',
          description: '销售金额 优惠后的金额',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        status: {
          type: 'integer',
          format: 'int32',
          description: '商品状态: 0: 新增  10 待审核 20 审核不通过 30 已发布 40 已下线,字典：goodsState',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateDate: {
          type: 'string',
          format: 'date-time',
          description: '更新时间',
        },
        updateUserName: {
          type: 'string',
          description: '更新人名字',
        },
        verifyBy: {
          type: 'integer',
          format: 'int64',
          description: '审核人',
        },
        verifyByName: {
          type: 'string',
          description: '审核人姓名',
        },
        verifyDate: {
          type: 'string',
          format: 'date-time',
          description: '审核时间',
        },
      },
      title: '商品 model',
    },
    商品查询参数: {
      type: 'object',
      properties: {
        approveTimeFrom: {
          type: 'string',
          format: 'date-time',
          description: '审核通过时间开始',
        },
        approveTimeTo: {
          type: 'string',
          format: 'date-time',
          description: '审核通过时间结束',
        },
        createBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '创建开始时间',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createEndDate: {
          type: 'string',
          format: 'date-time',
          description: '创建结束时间',
        },
        id: {
          type: 'integer',
          format: 'int64',
          description: '商品ID',
          minimum: 0.0,
          exclusiveMinimum: false,
        },
        name: {
          type: 'string',
          description: '商品名',
          minLength: 0,
          maxLength: 128,
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,第N页,默认1',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,每页N条记录,默认20',
        },
        priceFrom: {
          type: 'number',
          description: '查询最低价格',
          minimum: 0.0,
          exclusiveMinimum: false,
        },
        priceTo: {
          type: 'number',
          description: '查询最高价格',
          minimum: 0.0,
          exclusiveMinimum: false,
        },
        status: {
          type: 'integer',
          format: 'int32',
          description: '商品状态',
        },
        updateBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '更新开始时间',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateEndDate: {
          type: 'string',
          format: 'date-time',
          description: '更新结束时间',
        },
      },
      title: '商品查询参数',
    },
    '商品简单查询参数，学生中心用': {
      type: 'object',
      properties: {
        busiType: {
          type: 'integer',
          format: 'int32',
          description: '类型busiType, k12初高中、低幼英语，字典:busiType',
        },
        goodsName: {
          type: 'string',
          description: '商品名称',
        },
        status: {
          type: 'integer',
          format: 'int32',
          description: '商品状态',
        },
      },
      title: '商品简单查询参数，学生中心用',
    },
    '字典 model': {
      type: 'object',
      properties: {
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createDate: {
          type: 'string',
          format: 'date-time',
          description: '创建时间',
        },
        createUserName: {
          type: 'string',
          description: '创建人名字',
        },
        description: {
          type: 'string',
          description: '描述',
        },
        id: {
          type: 'integer',
          format: 'int64',
        },
        label: {
          type: 'string',
          description: '标签名',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        sort: {
          type: 'integer',
          format: 'int32',
          description: '来源排序',
        },
        status: {
          type: 'integer',
          format: 'int32',
          description: '状态:0启用 1禁用',
        },
        sysData: {
          type: 'integer',
          format: 'int32',
          description: '用途 0:字典 1:配置',
        },
        type: {
          type: 'string',
          description: '类别',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateDate: {
          type: 'string',
          format: 'date-time',
          description: '更新时间',
        },
        updateUserName: {
          type: 'string',
          description: '更新人名字',
        },
        value: {
          type: 'string',
          description: '数据值',
        },
      },
      title: '字典 model',
    },
    '学生已完成课节 model': {
      type: 'object',
      properties: {
        courseName: {
          type: 'string',
          description: '课程名',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        lessonId: {
          type: 'integer',
          format: 'int64',
          description: '课节id',
        },
        standardClassCode: {
          type: 'string',
          description: '课序',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
      },
      title: '学生已完成课节 model',
    },
    '学生已开课程分页结果 model': {
      type: 'object',
      properties: {
        availableExemptionNum: {
          type: 'integer',
          format: 'int32',
          description: '剩余请假次数',
        },
        availableNum: {
          type: 'integer',
          format: 'int32',
          description: '可用课时数',
        },
        cname: {
          type: 'string',
          description: '课程名称',
        },
        courseId: {
          type: 'integer',
          format: 'int64',
          description: '课程ID',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createDate: {
          type: 'string',
          format: 'date-time',
          description: '创建时间',
        },
        createUserName: {
          type: 'string',
          description: '创建人名字',
        },
        id: {
          type: 'integer',
          format: 'int64',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        shareLeftTotalNum: {
          type: 'integer',
          format: 'int32',
          description: '共享剩余总课时',
        },
        shareTotalNum: {
          type: 'integer',
          format: 'int32',
          description: '共享的总课时',
        },
        totalDoneNum: {
          type: 'integer',
          format: 'int32',
          description: '完成课时',
        },
        totalReservedNum: {
          type: 'integer',
          format: 'int32',
          description: '已排课时,备注：已排未上=已排-已完成',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateDate: {
          type: 'string',
          format: 'date-time',
          description: '更新时间',
        },
        updateUserName: {
          type: 'string',
          description: '更新人名字',
        },
      },
      title: '学生已开课程分页结果 model',
    },
    学生课程Model: {
      type: 'object',
      properties: {
        classType: {
          type: 'integer',
          format: 'int32',
          description: '课程类型',
        },
        cname: {
          type: 'string',
          description: '课程名称',
        },
        courseId: {
          type: 'integer',
          format: 'int64',
          description: '课程ID',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createDate: {
          type: 'string',
          format: 'date-time',
          description: '创建时间',
        },
        createUserName: {
          type: 'string',
          description: '创建人名字',
        },
        cycleFlag: {
          type: 'integer',
          format: 'int32',
          description: '课序是否循环',
        },
        deadline: {
          type: 'string',
          format: 'date-time',
          description: '课程有效结束时间',
        },
        id: {
          type: 'integer',
          format: 'int64',
        },
        lastestLessonId: {
          type: 'integer',
          format: 'int64',
          description: '最近结束的课节id',
        },
        lastestLessonStartTime: {
          type: 'string',
          format: 'date-time',
          description: '最近结束的课节开始时间',
        },
        lastestOrderId: {
          type: 'integer',
          format: 'int64',
          description: '最近的订单',
        },
        nextStdClassId: {
          type: 'integer',
          format: 'int64',
          description: '下一个课序ID',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        startline: {
          type: 'string',
          format: 'date-time',
          description: '课程有效开始时间',
        },
        status: {
          type: 'integer',
          format: 'int32',
          description: '课程状态',
        },
        studentUid: {
          type: 'integer',
          format: 'int64',
          description: '学生ID',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateDate: {
          type: 'string',
          format: 'date-time',
          description: '更新时间',
        },
        updateUserName: {
          type: 'string',
          description: '更新人名字',
        },
      },
      title: '学生课程Model',
    },
    学生课节实例model: {
      type: 'object',
      properties: {
        abnormal: {
          type: 'integer',
          format: 'int64',
          description: '异常代码',
        },
        abnormalDesc: {
          type: 'string',
          description: '异常描述',
        },
        actualDuration: {
          type: 'integer',
          format: 'int32',
          description: '实际上课时长',
        },
        addrUrl: {
          type: 'string',
          description: '课件地址',
        },
        aftAddrUrl: {
          type: 'string',
        },
        attendanceState: {
          type: 'integer',
          format: 'int32',
          description: '到课状态',
        },
        busiType: {
          type: 'integer',
          format: 'int32',
          description: '业务类型',
        },
        cancelBy: {
          type: 'integer',
          format: 'int64',
          description: '取消人',
        },
        cancelDate: {
          type: 'string',
          format: 'date-time',
          description: '取消时间',
        },
        cancelReason: {
          type: 'string',
          description: '取消原因',
        },
        cancelRemark: {
          type: 'string',
          description: '取消备注',
        },
        cname: {
          type: 'string',
          description: '课程名',
        },
        courseId: {
          type: 'integer',
          format: 'int64',
          description: '课程id',
        },
        coursewareName: {
          type: 'string',
          description: '课件名字',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createDate: {
          type: 'string',
          format: 'date-time',
          description: '创建时间',
        },
        createUserName: {
          type: 'string',
          description: '创建人名字',
        },
        endTime: {
          type: 'string',
          format: 'date-time',
          description: '结束时间',
        },
        extResUrl: {
          type: 'string',
          description: 'bs2 url地址',
        },
        id: {
          type: 'integer',
          format: 'int64',
        },
        learningState: {
          type: 'integer',
          format: 'int32',
          description: '完课状态',
        },
        lessonCompenSate: {
          type: 'integer',
          format: 'int32',
          description: '课节补偿情况：1-不存在补偿单（或审批不通过）可以补偿，2-存在进行中的补偿单，3-存在审批通过的补偿单',
        },
        lessonName: {
          type: 'string',
          description: '课节名称（课序Code）',
        },
        preAddrUrl: {
          type: 'string',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        sid: {
          type: 'integer',
          format: 'int64',
          description: '房间号',
        },
        sourceType: {
          type: 'integer',
          format: 'int32',
          description: '课节类型，字典：sourceType',
        },
        standardClassCode: {
          type: 'string',
          description: '课序编号',
        },
        standardClassId: {
          type: 'integer',
          format: 'int64',
          description: '课序id',
        },
        startTime: {
          type: 'string',
          format: 'date-time',
          description: '开始时间',
        },
        state: {
          type: 'integer',
          format: 'int32',
          description: '状态',
        },
        studentMobile: {
          type: 'string',
          description: '学生手机号',
        },
        studentName: {
          type: 'string',
          description: '学生姓名',
        },
        studentUid: {
          type: 'integer',
          format: 'int64',
          description: '学生uid',
        },
        teacherCancelCount: {
          type: 'integer',
          format: 'int32',
          description: '老师取消次数',
        },
        teacherName: {
          type: 'string',
          description: '老师名字',
        },
        teachingType: {
          type: 'integer',
          format: 'int32',
          description: '教学方式',
        },
        textBookCode: {
          type: 'string',
          description: '教材标号',
        },
        tuid: {
          type: 'integer',
          format: 'int64',
          description: '老师uid',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateDate: {
          type: 'string',
          format: 'date-time',
          description: '更新时间',
        },
        updateUserName: {
          type: 'string',
          description: '更新人名字',
        },
      },
      title: '学生课节实例model',
    },
    已开课程分页列表请求model: {
      type: 'object',
      properties: {
        busiType: {
          type: 'integer',
          format: 'int32',
          description: '业务类型',
        },
        createBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '创建开始时间',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createEndDate: {
          type: 'string',
          format: 'date-time',
          description: '创建结束时间',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,第N页,默认1',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,每页N条记录,默认20',
        },
        uid: {
          type: 'integer',
          format: 'int64',
          description: '学生UID',
        },
        updateBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '更新开始时间',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateEndDate: {
          type: 'string',
          format: 'date-time',
          description: '更新结束时间',
        },
      },
      title: '已开课程分页列表请求model',
    },
    当前sid的liveType: {
      type: 'object',
      properties: {
        liveType: {
          type: 'integer',
          format: 'int32',
          description: '直播类型(线路)',
        },
        sid: {
          type: 'integer',
          format: 'int64',
          description: '课节的sid',
        },
      },
      title: '当前sid的liveType',
    },
    '录入支付单 model': {
      type: 'object',
      required: [
        'chId',
        'chOrderId',
        'money',
        'payMethod',
      ],
      properties: {
        chId: {
          type: 'string',
          description: '支付渠道，字典：payChannel',
        },
        chOrderId: {
          type: 'string',
          description: '商户订单号',
        },
        money: {
          type: 'number',
          description: '支付金额',
          minimum: 0.01,
          exclusiveMinimum: false,
        },
        payMethod: {
          type: 'string',
          description: '支付方式 ,字典：payMethod',
        },
      },
      title: '录入支付单 model',
    },
    快捷入口入参: {
      type: 'object',
      properties: {
        useObjs: {
          type: 'array',
          description: '使用者、队列id或者uid',
          items: {
            type: 'integer',
            format: 'int64',
            minimum: 1,
            maximum: 2147483647,
          },
        },
        useType: {
          type: 'integer',
          format: 'int32',
          description: '使用类型1：队列，2：个人',
        },
      },
      title: '快捷入口入参',
    },
    快捷入口出参: {
      type: 'object',
      properties: {
        content: {
          type: 'string',
          description: '内容',
        },
        faqId: {
          type: 'integer',
          format: 'int64',
          description: '类别ID',
        },
        nodes: {
          type: 'array',
          description: '子列表',
          items: {
            $ref: '#/definitions/快捷入口出参',
          },
        },
      },
      title: '快捷入口出参',
    },
    扩科: {
      type: 'object',
      properties: {
        orderId: {
          type: 'integer',
          format: 'int64',
          description: '订单ID',
        },
        shareFromCourseId: {
          type: 'integer',
          format: 'int64',
          description: '扩科来源课程ID',
        },
        shareToCourseId: {
          type: 'integer',
          format: 'int64',
          description: '扩科去向课程ID',
        },
        uid: {
          type: 'integer',
          format: 'int64',
          description: '学生UID',
        },
      },
      title: '扩科',
    },
    '批量取消课节 model': {
      type: 'object',
      required: [
        'cancelReason',
        'courseMap',
      ],
      properties: {
        cancelReason: {
          type: 'string',
          description: '取消原因',
        },
        cancelRemark: {
          type: 'string',
          description: '取消备注',
        },
        courseMap: {
          type: 'object',
          description: '课节IDs',
          additionalProperties: {
            type: 'array',
            items: {
              type: 'integer',
              format: 'int64',
            },
          },
        },
        studentUid: {
          type: 'integer',
          format: 'int64',
          description: '学生uid',
        },
      },
      title: '批量取消课节 model',
    },
    '排课策略 model': {
      type: 'object',
      required: [
        'courseId',
        'endDate',
        'frequencyType',
        'lessonCourseId',
        'startTime',
        'studentUid',
      ],
      properties: {
        courseId: {
          type: 'integer',
          format: 'int64',
          description: '消耗账本课程ID',
          minimum: 1.0,
          exclusiveMinimum: false,
        },
        endDate: {
          type: 'string',
          format: 'date-time',
          description: '结束日期',
        },
        firstStandardClassId: {
          type: 'integer',
          format: 'int64',
          description: '首次上课课序ID',
        },
        frequencyType: {
          type: 'integer',
          format: 'int32',
          description: '频率类型',
        },
        lessonCourseId: {
          type: 'integer',
          format: 'int64',
          description: '排课课程ID',
          minimum: 1.0,
          exclusiveMinimum: false,
        },
        startTime: {
          type: 'string',
          format: 'date-time',
          description: '开始时间',
        },
        studentUid: {
          type: 'integer',
          format: 'int64',
          description: '学生uid',
          minimum: 1.0,
          exclusiveMinimum: false,
        },
        tuid: {
          type: 'integer',
          format: 'int64',
          description: '老师ID',
        },
      },
      title: '排课策略 model',
    },
    '排课预览返回 model': {
      type: 'object',
      properties: {
        conflictType: {
          type: 'integer',
          format: 'int32',
          description: '课节冲突情况 0：无冲突 1：学生课表冲突 2：老师课表冲突，3.剩余课序不足',
        },
        endTime: {
          type: 'string',
          format: 'date-time',
          description: '上课结束时间',
        },
        id: {
          type: 'integer',
          format: 'int64',
          description: '课节ID',
        },
        startTime: {
          type: 'string',
          format: 'date-time',
          description: '上课开始时间',
        },
      },
      title: '排课预览返回 model',
    },
    '教材 model ': {
      type: 'object',
      properties: {
        bookCode: {
          type: 'string',
          description: '教材编号  全局唯一',
        },
        bookCover: {
          type: 'string',
          description: '教材封面',
        },
        busiType: {
          type: 'integer',
          format: 'int32',
          description: '业务类型：k12初高中、低幼英语',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createDate: {
          type: 'string',
          format: 'date-time',
          description: '创建时间',
        },
        createUserName: {
          type: 'string',
          description: '创建人名字',
        },
        grade: {
          type: 'integer',
          format: 'int32',
          description: '年级',
        },
        id: {
          type: 'integer',
          format: 'int64',
        },
        modifyFlag: {
          type: 'integer',
          format: 'int32',
          description: '更改标志，方便界面比较审核,1有变动',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        status: {
          type: 'integer',
          format: 'int32',
          description: '教材状态:10-新建,20-审核中,30-审核通过,31-上传课件中,32-上传课件完成,40-更新中，50-下线',
        },
        subject: {
          type: 'integer',
          format: 'int32',
          description: '科目',
        },
        textBookChName: {
          type: 'string',
          description: '教材中文名',
        },
        textBookEnName: {
          type: 'string',
          description: '教材英文名',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateDate: {
          type: 'string',
          format: 'date-time',
          description: '更新时间',
        },
        updateUserName: {
          type: 'string',
          description: '更新人名字',
        },
      },
      title: '教材 model ',
    },
    '教材新增 model': {
      type: 'object',
      required: [
        'bookCode',
        'bookCover',
        'busiType',
        'textBookEnName',
      ],
      properties: {
        bookCode: {
          type: 'string',
          description: '教材编号  全局唯一',
          pattern: '^[A-Za-z0-9-]{0,4}$',
        },
        bookCover: {
          type: 'string',
          description: '教材封面',
        },
        busiType: {
          type: 'integer',
          format: 'int32',
          description: '业务类型：k12初高中、低幼英语',
        },
        grade: {
          type: 'integer',
          format: 'int32',
          description: '年级',
        },
        remarks: {
          type: 'string',
          description: '备注',
          minLength: 0,
          maxLength: 250,
        },
        status: {
          type: 'integer',
          format: 'int32',
          description: '教材状态:0-新建,10-审核中,20-已发布,30-更新中,40-下线',
        },
        subject: {
          type: 'integer',
          format: 'int32',
          description: '科目',
        },
        textBookChName: {
          type: 'string',
          description: '教材中文名',
        },
        textBookEnName: {
          type: 'string',
          description: '教材英文名',
        },
      },
      title: '教材新增 model',
    },
    '教材查询 model': {
      type: 'object',
      required: [
        'bookCode',
      ],
      properties: {
        bookCode: {
          type: 'string',
          description: '教材编号  全局唯一',
          pattern: '^[A-Za-z0-9-]{0,4}$',
        },
        bookCover: {
          type: 'string',
          description: '教材封面',
        },
        busiType: {
          type: 'integer',
          format: 'int32',
          description: '业务类型：k12初高中、低幼英语',
        },
        createBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '创建开始时间',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createEndDate: {
          type: 'string',
          format: 'date-time',
          description: '创建结束时间',
        },
        endUpdateDate: {
          type: 'string',
          format: 'date-time',
          description: '更新时间，结束',
        },
        grade: {
          type: 'integer',
          format: 'int32',
          description: '年级',
        },
        ids: {
          type: 'array',
          description: '教材ids',
          items: {
            type: 'integer',
            format: 'int64',
          },
        },
        orderBy: {
          type: 'string',
          description: '排序',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,第N页,默认1',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,每页N条记录,默认20',
        },
        startUpdateDate: {
          type: 'string',
          format: 'date-time',
          description: '更新时间，开始',
        },
        status: {
          type: 'integer',
          format: 'int32',
          description: '教材状态:0-新建,10-审核中,20-已发布,30-更新中,40-下线',
        },
        subject: {
          type: 'integer',
          format: 'int32',
          description: '科目',
        },
        textBookChName: {
          type: 'string',
          description: '教材中文名',
        },
        textBookEnName: {
          type: 'string',
          description: '教材英文名',
        },
        updateBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '更新开始时间',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateEndDate: {
          type: 'string',
          format: 'date-time',
          description: '更新结束时间',
        },
      },
      title: '教材查询 model',
    },
    教材资源model: {
      type: 'object',
      properties: {
        addrUrl: {
          type: 'string',
          description: '资源地址url',
        },
        chapterId: {
          type: 'integer',
          format: 'int64',
          description: '章节id',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createDate: {
          type: 'string',
          format: 'date-time',
          description: '创建时间',
        },
        createUserName: {
          type: 'string',
          description: '创建人名字',
        },
        id: {
          type: 'integer',
          format: 'int64',
        },
        name: {
          type: 'string',
          description: '教材资源名字',
        },
        picUrl: {
          type: 'string',
          description: '资源缩率图地址url',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        status: {
          type: 'integer',
          format: 'int32',
          description: '审核状态 0待审核/1审核通过/2审核不通过/10废弃',
        },
        textBookId: {
          type: 'integer',
          format: 'int64',
          description: '教材id',
        },
        type: {
          type: 'integer',
          format: 'int32',
          description: '教材资源类型 1：视频，2:音频',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateDate: {
          type: 'string',
          format: 'date-time',
          description: '更新时间',
        },
        updateUserName: {
          type: 'string',
          description: '更新人名字',
        },
      },
      title: '教材资源model',
    },
    '教材资源保存 model': {
      type: 'object',
      properties: {
        addrUrl: {
          type: 'string',
          description: '资源地址url',
        },
        id: {
          type: 'integer',
          format: 'int64',
          description: '磨耳朵资源ID,无值表示新增，有值表示修改',
        },
        name: {
          type: 'string',
          description: '教材资源名字',
          minLength: 0,
          maxLength: 100,
        },
        picUrl: {
          type: 'string',
          description: '资源缩率图地址url',
        },
        type: {
          type: 'integer',
          format: 'int32',
          description: '教材资源类型 1：视频，2:音频',
        },
      },
      title: '教材资源保存 model',
    },
    '查询学生课节 model': {
      type: 'object',
      required: [
        'endTime',
        'studentUid',
      ],
      properties: {
        courseId: {
          type: 'integer',
          format: 'int64',
          description: '课程id',
        },
        createBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '创建开始时间',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createEndDate: {
          type: 'string',
          format: 'date-time',
          description: '创建结束时间',
        },
        endTime: {
          type: 'string',
          format: 'date-time',
          description: '课节结束时间',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,第N页,默认1',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,每页N条记录,默认20',
        },
        sourceType: {
          type: 'integer',
          format: 'int32',
          description: '课节类型,字典：sourceType',
        },
        startTime: {
          type: 'string',
          format: 'date-time',
          description: '课节开始时间',
        },
        state: {
          type: 'integer',
          format: 'int32',
          description: '课节状态,字典：lessonState',
        },
        studentUid: {
          type: 'integer',
          format: 'int64',
          description: '学生uid',
        },
        updateBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '更新开始时间',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateEndDate: {
          type: 'string',
          format: 'date-time',
          description: '更新结束时间',
        },
      },
      title: '查询学生课节 model',
    },
    '查询课节 model': {
      type: 'object',
      required: [
        'pageNo',
        'pageSize',
        'startTimeFrom',
        'startTimeTo',
      ],
      properties: {
        busiType: {
          type: 'integer',
          format: 'int32',
          description: '业务类型',
        },
        lessonId: {
          type: 'integer',
          format: 'int64',
          description: '课节id',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
          description: '页数',
          minimum: 1.0,
          exclusiveMinimum: false,
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
          description: '页码',
          minimum: 1.0,
          exclusiveMinimum: false,
        },
        sourceType: {
          type: 'integer',
          format: 'int32',
          description: '课节类型',
        },
        startTimeFrom: {
          type: 'string',
          format: 'date-time',
          description: '课节开始时间',
        },
        startTimeTo: {
          type: 'string',
          format: 'date-time',
          description: '课节结束时间',
        },
        state: {
          type: 'integer',
          format: 'int32',
          description: '课节状态,字典：lessonState',
        },
        studentMobile: {
          type: 'string',
          description: '学生电话',
        },
        studentName: {
          type: 'string',
          description: '学生姓名',
        },
        teacherMobile: {
          type: 'string',
          description: '老师电话',
        },
        teacherName: {
          type: 'string',
          description: '老师姓名',
        },
        teachingType: {
          type: 'integer',
          format: 'int32',
          description: '教学类型',
        },
        tuid: {
          type: 'integer',
          format: 'int64',
          description: '老师uid',
        },
        uid: {
          type: 'integer',
          format: 'int64',
          description: '学生uid',
        },
      },
      title: '查询课节 model',
    },
    '消息通知 model': {
      type: 'object',
      properties: {
        appType: {
          type: 'string',
          description: 'app类型',
        },
        bizId: {
          type: 'string',
          description: '对象id',
        },
        bizType: {
          type: 'string',
          description: ' 对象类型',
        },
        busiType: {
          type: 'integer',
          format: 'int32',
          description: '业务类型',
        },
        execTime: {
          type: 'string',
          format: 'date-time',
          description: '期待发送时间',
        },
        expiredTime: {
          type: 'string',
          format: 'date-time',
          description: '失效时间',
        },
        msgType: {
          type: 'string',
          description: '消息类型',
        },
        notifyType: {
          type: 'string',
          description: '通知类型',
        },
        param: {
          type: 'string',
          description: 'json',
        },
        sendFlag: {
          type: 'integer',
          format: 'int32',
          description: '发送标识',
        },
        templId: {
          type: 'string',
          description: '消息模版id',
        },
        uid: {
          type: 'integer',
          format: 'int64',
          description: '用户Id',
        },
      },
      title: '消息通知 model',
    },
    渠道列表入参: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          description: '渠道名称',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
          description: '页数',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
          description: '页码',
        },
        promotId: {
          type: 'integer',
          format: 'int64',
          description: '推广人Id',
        },
        sourceCode: {
          type: 'string',
          description: '渠道码',
        },
      },
      title: '渠道列表入参',
    },
    渠道详情页: {
      type: 'object',
      properties: {
        city: {
          type: 'string',
          description: '所在市',
        },
        country: {
          type: 'string',
          description: '所在国家',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        district: {
          type: 'string',
          description: '所在区',
        },
        firstLessonDate: {
          type: 'string',
          format: 'date-time',
          description: '首次开课日期',
        },
        friendsUrl: {
          type: 'string',
          description: '加好友url',
        },
        goodsId: {
          type: 'integer',
          format: 'int64',
          description: '推广的商品',
        },
        id: {
          type: 'integer',
          format: 'int64',
          description: '渠道id',
        },
        landingPageUrl: {
          type: 'string',
          description: '落地页url',
        },
        name: {
          type: 'string',
          description: '幼儿园名称',
        },
        promotAgent: {
          type: 'string',
          description: '代理商',
        },
        promotDate: {
          type: 'string',
          format: 'date-time',
          description: '推广日期',
        },
        promotId: {
          type: 'integer',
          format: 'int64',
          description: '推广人Id',
        },
        province: {
          type: 'string',
          description: '所在省',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        shortName: {
          type: 'string',
          description: '幼儿园简称',
        },
        sourceCode: {
          type: 'string',
          description: '渠道码',
        },
        sourceName: {
          type: 'string',
          description: '渠道名称',
        },
        studentNum: {
          type: 'integer',
          format: 'int32',
          description: '在院人数',
        },
        transitionType: {
          type: 'integer',
          format: 'int32',
          description: '转化阶段 1 推广期 2 上课期 3 转化期',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '修改人',
        },
        zhiyuBotId: {
          type: 'string',
          description: '智语推广机器人id，多个时用,分割',
        },
        zhiyuType: {
          type: 'integer',
          format: 'int32',
          description: '是否分配智语 1 是 0 否',
        },
      },
      title: '渠道详情页',
    },
    渠道详情页入参: {
      type: 'object',
      properties: {
        city: {
          type: 'string',
          description: '所在市',
        },
        country: {
          type: 'string',
          description: '所在国家',
        },
        district: {
          type: 'string',
          description: '所在区',
        },
        firstLessonDate: {
          type: 'string',
          format: 'date-time',
          description: '首次开课日期',
        },
        goodsId: {
          type: 'integer',
          format: 'int64',
          description: '推广的商品',
        },
        landingPageUrl: {
          type: 'string',
          description: '落地页url',
        },
        name: {
          type: 'string',
          description: '幼儿园名称',
        },
        promotAgent: {
          type: 'string',
          description: '代理商',
        },
        promotDate: {
          type: 'string',
          format: 'date-time',
          description: '推广日期',
        },
        promotId: {
          type: 'integer',
          format: 'int64',
          description: '推广人Id',
        },
        province: {
          type: 'string',
          description: '所在省',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        shortName: {
          type: 'string',
          description: '幼儿园简称',
        },
        studentNum: {
          type: 'integer',
          format: 'int32',
          description: '在院人数',
        },
        transitionType: {
          type: 'integer',
          format: 'int32',
          description: '转化阶段 1 推广期 2 上课期 3 转化期',
        },
        zhiyuBotId: {
          type: 'string',
          description: '智语推广机器人id，多个时用,分割',
        },
        zhiyuType: {
          type: 'integer',
          format: 'int32',
          description: '是否分配智语 1 是 0 否',
        },
      },
      title: '渠道详情页入参',
    },
    渠道详情页更新入参: {
      type: 'object',
      properties: {
        city: {
          type: 'string',
          description: '所在市',
        },
        country: {
          type: 'string',
          description: '所在国家',
        },
        district: {
          type: 'string',
          description: '所在区',
        },
        firstLessonDate: {
          type: 'string',
          format: 'date-time',
          description: '首次开课日期',
        },
        goodsId: {
          type: 'integer',
          format: 'int64',
          description: '推广的商品',
        },
        id: {
          type: 'integer',
          format: 'int64',
          description: '渠道Id',
        },
        landingPageUrl: {
          type: 'string',
          description: '落地页url',
        },
        name: {
          type: 'string',
          description: '渠道名称',
        },
        promotAgent: {
          type: 'string',
          description: '代理商',
        },
        promotDate: {
          type: 'string',
          format: 'date-time',
          description: '推广日期',
        },
        promotId: {
          type: 'integer',
          format: 'int64',
          description: '推广人Id',
        },
        province: {
          type: 'string',
          description: '所在省',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        shortName: {
          type: 'string',
          description: '渠道简称',
        },
        sourceCode: {
          type: 'string',
          description: '渠道码',
        },
        studentNum: {
          type: 'integer',
          format: 'int32',
          description: '在院人数',
        },
        transitionType: {
          type: 'integer',
          format: 'int32',
          description: '转化阶段 1 推广期 2 上课期 3 转化期',
        },
        zhiyuBotId: {
          type: 'string',
          description: '智语推广机器人id，多个时用,分割',
        },
        zhiyuType: {
          type: 'integer',
          format: 'int32',
          description: '是否分配智语 1 是 0 否',
        },
      },
      title: '渠道详情页更新入参',
    },
    '知识点内容 model': {
      type: 'object',
      properties: {
        citedCount: {
          type: 'integer',
          format: 'int32',
          description: '引用次数',
        },
        content: {
          type: 'string',
          description: '内容',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createDate: {
          type: 'string',
          format: 'date-time',
          description: '创建时间',
        },
        createUserName: {
          type: 'string',
          description: '创建人名字',
        },
        id: {
          type: 'integer',
          format: 'int64',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        status: {
          type: 'integer',
          format: 'int32',
          description: '状态',
        },
        tagsIds: {
          type: 'array',
          description: '标签Id集合,查询参数',
          items: {
            type: 'integer',
            format: 'int64',
          },
        },
        tagsList: {
          type: 'array',
          description: '标签集合',
          items: {
            $ref: '#/definitions/TbKnowledgeCategoryDto',
          },
        },
        type: {
          type: 'integer',
          format: 'int32',
          description: '类型(1单词,2词块,3句子)',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateDate: {
          type: 'string',
          format: 'date-time',
          description: '更新时间',
        },
        updateUserName: {
          type: 'string',
          description: '更新人名字',
        },
      },
      title: '知识点内容 model',
    },
    '知识点内容新增 model': {
      type: 'object',
      required: [
        'content',
        'tagsIds',
      ],
      properties: {
        content: {
          type: 'string',
          description: '内容',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        status: {
          type: 'integer',
          format: 'int32',
          description: '状态',
        },
        tagsIds: {
          type: 'array',
          description: '标签Id集合',
          items: {
            type: 'integer',
            format: 'int64',
          },
        },
      },
      title: '知识点内容新增 model',
    },
    '知识点内容更新 model': {
      type: 'object',
      required: [
        'content',
        'id',
      ],
      properties: {
        content: {
          type: 'string',
          description: '内容',
        },
        id: {
          type: 'integer',
          format: 'int64',
          description: 'id',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        status: {
          type: 'integer',
          format: 'int32',
          description: '状态',
        },
        tagsIds: {
          type: 'array',
          description: '标签Id集合',
          items: {
            type: 'integer',
            format: 'int64',
          },
        },
      },
      title: '知识点内容更新 model',
    },
    '知识点内容查询 model': {
      type: 'object',
      properties: {
        content: {
          type: 'string',
          description: '内容',
        },
        createBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '创建开始时间',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createEndDate: {
          type: 'string',
          format: 'date-time',
          description: '创建结束时间',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,第N页,默认1',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,每页N条记录,默认20',
        },
        status: {
          type: 'integer',
          format: 'int32',
          description: '状态',
        },
        tagsIds: {
          type: 'array',
          description: '标签Id集合,查询参数',
          items: {
            type: 'integer',
            format: 'int64',
          },
        },
        type: {
          type: 'integer',
          format: 'int32',
          description: '类型(1单词,2词块,3句子)',
        },
        updateBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '更新开始时间',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateEndDate: {
          type: 'string',
          format: 'date-time',
          description: '更新结束时间',
        },
      },
      title: '知识点内容查询 model',
    },
    '磨耳朵保存 model': {
      type: 'object',
      required: [
        'chapterId',
        'name',
        'textBookId',
        'textBookMaterialSaveReqList',
      ],
      properties: {
        chapterId: {
          type: 'integer',
          format: 'int64',
          description: '章节id',
        },
        id: {
          type: 'integer',
          format: 'int64',
          description: '磨耳朵ID,无值表示新增，有值表示修改',
        },
        name: {
          type: 'string',
          description: '磨耳朵单元名称',
          minLength: 0,
          maxLength: 100,
        },
        remarks: {
          type: 'string',
          description: '备注',
          minLength: 0,
          maxLength: 100,
        },
        textBookId: {
          type: 'integer',
          format: 'int64',
          description: '教材id',
        },
        textBookMaterialSaveReqList: {
          type: 'array',
          description: '磨耳朵单元对应资源列表',
          items: {
            $ref: '#/definitions/教材资源保存 model',
          },
        },
      },
      title: '磨耳朵保存 model',
    },
    '磨耳朵分页列表响应 model': {
      type: 'object',
      properties: {
        chapterCode: {
          type: 'string',
          description: '章节Code',
        },
        chapterEnName: {
          type: 'string',
          description: '章节英文名',
        },
        chapterId: {
          type: 'integer',
          format: 'int64',
          description: '章节id',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createDate: {
          type: 'string',
          format: 'date-time',
          description: '创建时间',
        },
        createUserName: {
          type: 'string',
          description: '创建人名字',
        },
        id: {
          type: 'integer',
          format: 'int64',
        },
        name: {
          type: 'string',
          description: '磨耳朵名称',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        textBookId: {
          type: 'integer',
          format: 'int64',
          description: '教材id',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateDate: {
          type: 'string',
          format: 'date-time',
          description: '更新时间',
        },
        updateUserName: {
          type: 'string',
          description: '更新人名字',
        },
      },
      title: '磨耳朵分页列表响应 model',
    },
    磨耳朵分页列表请求model: {
      type: 'object',
      required: [
        'textBookId',
      ],
      properties: {
        chapterId: {
          type: 'integer',
          format: 'int64',
          description: '磨耳朵单元ID',
        },
        createBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '创建开始时间',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createEndDate: {
          type: 'string',
          format: 'date-time',
          description: '创建结束时间',
        },
        name: {
          type: 'string',
          description: '磨耳朵名称（标题）',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,第N页,默认1',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,每页N条记录,默认20',
        },
        textBookId: {
          type: 'integer',
          format: 'int64',
          description: '教材id',
        },
        updateBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '更新开始时间',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateEndDate: {
          type: 'string',
          format: 'date-time',
          description: '更新结束时间',
        },
      },
      title: '磨耳朵分页列表请求model',
    },
    '磨耳朵详情 model': {
      type: 'object',
      properties: {
        chapterCode: {
          type: 'string',
          description: '章节Code',
        },
        chapterEnName: {
          type: 'string',
          description: '章节英文名',
        },
        chapterId: {
          type: 'integer',
          format: 'int64',
          description: '章节id',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createDate: {
          type: 'string',
          format: 'date-time',
          description: '创建时间',
        },
        createUserName: {
          type: 'string',
          description: '创建人名字',
        },
        id: {
          type: 'integer',
          format: 'int64',
        },
        name: {
          type: 'string',
          description: '磨耳朵单元名称',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        textBookId: {
          type: 'integer',
          format: 'int64',
          description: '教材id',
        },
        textBookMaterialResList: {
          type: 'array',
          description: '磨耳朵单元对应资源列表',
          items: {
            $ref: '#/definitions/教材资源model',
          },
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateDate: {
          type: 'string',
          format: 'date-time',
          description: '更新时间',
        },
        updateUserName: {
          type: 'string',
          description: '更新人名字',
        },
      },
      title: '磨耳朵详情 model',
    },
    '章节 model 聚合': {
      type: 'object',
      properties: {
        editVersion: {
          description: '编辑版本',
          $ref: '#/definitions/StandardClassRes',
        },
        publishVersion: {
          description: '发布版本',
          $ref: '#/definitions/StandardClassRes',
        },
      },
      title: '章节 model 聚合',
    },
    老师课程表model: {
      type: 'object',
      required: [
        'pageNo',
        'pageSize',
        'tuid',
      ],
      properties: {
        courseId: {
          type: 'integer',
          format: 'int64',
          description: '课程Id',
        },
        endTime: {
          type: 'string',
          format: 'date-time',
          description: '结束时间',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
          description: '页数',
          minimum: 1.0,
          exclusiveMinimum: false,
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
          description: '页码',
          minimum: 1.0,
          exclusiveMinimum: false,
        },
        sourceType: {
          type: 'integer',
          format: 'int32',
          description: '课节类型，数据字典：sourceType',
        },
        startTime: {
          type: 'string',
          format: 'date-time',
          description: '开始时间',
        },
        state: {
          type: 'integer',
          format: 'int32',
          description: '课节状态，数据字典：lessonState',
        },
        states: {
          type: 'array',
          description: '多个课节状态',
          items: {
            type: 'integer',
            format: 'int32',
          },
        },
        suid: {
          type: 'integer',
          format: 'int64',
          description: '学生Suid',
        },
        tuid: {
          type: 'integer',
          format: 'int64',
          description: '老师tuid',
        },
      },
      title: '老师课程表model',
    },
    '补偿申请分页查询 model': {
      type: 'object',
      properties: {
        createBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '创建开始时间',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createEndDate: {
          type: 'string',
          format: 'date-time',
          description: '创建结束时间',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,第N页,默认1',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,每页N条记录,默认20',
        },
        state: {
          type: 'integer',
          format: 'int32',
          description: '补偿单状态，字典：compenState',
        },
        uid: {
          type: 'integer',
          format: 'int64',
          description: '学生ID',
          minimum: 1.0,
          exclusiveMinimum: false,
        },
        updateBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '更新开始时间',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateEndDate: {
          type: 'string',
          format: 'date-time',
          description: '更新结束时间',
        },
      },
      title: '补偿申请分页查询 model',
    },
    '补偿申请分页查询结果 model': {
      type: 'object',
      properties: {
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createDate: {
          type: 'string',
          format: 'date-time',
          description: '创建时间',
        },
        createUserName: {
          type: 'string',
          description: '创建人名字',
        },
        id: {
          type: 'integer',
          format: 'int64',
        },
        lessonNum: {
          type: 'integer',
          format: 'int32',
          description: '补偿课时数',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        state: {
          type: 'integer',
          format: 'int32',
          description: '补偿单状态，字典：compenState',
        },
        stuName: {
          type: 'string',
          description: '学生姓名',
        },
        uid: {
          type: 'integer',
          format: 'int64',
          description: '学生ID',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateDate: {
          type: 'string',
          format: 'date-time',
          description: '更新时间',
        },
        updateUserName: {
          type: 'string',
          description: '更新人名字',
        },
      },
      title: '补偿申请分页查询结果 model',
    },
    补偿申请单审批model: {
      type: 'object',
      required: [
        'id',
        'pass',
        'verifyRemark',
      ],
      properties: {
        id: {
          type: 'integer',
          format: 'int64',
          description: '补偿申请单ID',
          minimum: 1.0,
          exclusiveMinimum: false,
        },
        pass: {
          type: 'boolean',
          description: '是否通过',
        },
        verifyRemark: {
          type: 'string',
          description: '审批备注',
          minLength: 0,
          maxLength: 200,
        },
      },
      title: '补偿申请单审批model',
    },
    '补偿申请详情 model': {
      type: 'object',
      properties: {
        abnormal: {
          type: 'integer',
          format: 'int64',
          description: '异常代码',
        },
        attachment: {
          type: 'string',
          description: '图片url,json数组字符串',
        },
        busiType: {
          type: 'integer',
          format: 'int32',
          description: '业务类型，字典：busiType',
        },
        courseName: {
          type: 'string',
          description: '课程名称',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createDate: {
          type: 'string',
          format: 'date-time',
          description: '创建时间',
        },
        createUserName: {
          type: 'string',
          description: '创建人名字',
        },
        id: {
          type: 'integer',
          format: 'int64',
        },
        lessonAbnormal: {
          type: 'string',
          description: '课节异常状态',
        },
        lessonContent: {
          type: 'string',
          description: '上课内容，结构:',
        },
        lessonEndTime: {
          type: 'string',
          format: 'date-time',
          description: '课节结束时间',
        },
        lessonId: {
          type: 'integer',
          format: 'int64',
          description: '课节ID',
        },
        lessonNum: {
          type: 'integer',
          format: 'int32',
          description: '补偿课时数',
        },
        lessonStartTime: {
          type: 'string',
          format: 'date-time',
          description: '课节开始时间',
        },
        lessonState: {
          type: 'integer',
          format: 'int32',
          description: '课节状态，字典：lessonState',
        },
        orderCode: {
          type: 'string',
          description: '课耗订单Code',
        },
        reason: {
          type: 'integer',
          format: 'int32',
          description: '补偿原因，字典：compenReason',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        responsibleParty: {
          type: 'integer',
          format: 'int32',
          description: '补偿责任方，字典：compenResponsibleParty',
        },
        state: {
          type: 'integer',
          format: 'int32',
          description: '补偿单状态，字典：compenState',
        },
        stuName: {
          type: 'string',
          description: '学生姓名',
        },
        teaName: {
          type: 'string',
          description: '老师姓名',
        },
        teaUid: {
          type: 'integer',
          format: 'int64',
          description: '老师ID',
        },
        uid: {
          type: 'integer',
          format: 'int64',
          description: '学生ID',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateDate: {
          type: 'string',
          format: 'date-time',
          description: '更新时间',
        },
        updateUserName: {
          type: 'string',
          description: '更新人名字',
        },
        verifyBy: {
          type: 'integer',
          format: 'int64',
          description: '审核人ID',
        },
        verifyDate: {
          type: 'string',
          format: 'date-time',
          description: '审核时间',
        },
        verifyRemark: {
          type: 'string',
          description: '审核意见',
        },
        verifyUserName: {
          type: 'string',
          description: '审核人姓名',
        },
      },
      title: '补偿申请详情 model',
    },
    订单取消model: {
      type: 'object',
      required: [
        'clsReason',
        'uid',
      ],
      properties: {
        clsReason: {
          type: 'integer',
          format: 'int32',
          description: '取消原因',
          minimum: 1.0,
          exclusiveMinimum: false,
        },
        clsRemarks: {
          type: 'string',
          description: '取消备注',
        },
        uid: {
          type: 'integer',
          format: 'int64',
          description: '学生用户ID',
          minimum: 1.0,
          exclusiveMinimum: false,
        },
      },
      title: '订单取消model',
    },
    '订单新增 model': {
      type: 'object',
      required: [
        'goodsId',
        'source',
        'uid',
      ],
      properties: {
        couponId: {
          type: 'integer',
          format: 'int64',
          description: '优惠id，通过预览优惠得到',
        },
        goodsId: {
          type: 'integer',
          format: 'int64',
          description: '商品ID',
          minimum: 1.0,
          exclusiveMinimum: false,
        },
        istest: {
          type: 'integer',
          format: 'int32',
          description: "是否是试听单'0表示试听单，1表示正式单'",
        },
        remarks: {
          type: 'string',
          description: '订单备注',
          minLength: 0,
          maxLength: 250,
        },
        source: {
          type: 'string',
          description: '订单来源',
        },
        uid: {
          type: 'integer',
          format: 'int64',
          description: '学生用户ID',
          minimum: 1.0,
          exclusiveMinimum: false,
        },
      },
      title: '订单新增 model',
    },
    订单赠课申请单审批model: {
      type: 'object',
      required: [
        'id',
        'pass',
        'verifyRemark',
      ],
      properties: {
        id: {
          type: 'integer',
          format: 'int64',
          description: '赠课申请单ID',
          minimum: 1.0,
          exclusiveMinimum: false,
        },
        pass: {
          type: 'boolean',
          description: '是否通过',
        },
        verifyRemark: {
          type: 'string',
          description: '审批备注',
          minLength: 0,
          maxLength: 200,
        },
      },
      title: '订单赠课申请单审批model',
    },
    '订单过期情况 model': {
      type: 'object',
      properties: {
        deadline: {
          type: 'string',
          format: 'date-time',
          description: '过期时间',
        },
        isExpire: {
          type: 'boolean',
          description: '是否过期，true 已过期，false 未过期',
        },
      },
      title: '订单过期情况 model',
    },
    '订单退费前检查结果 model': {
      type: 'object',
      properties: {
        lessonCompenPass: {
          type: 'boolean',
          description: '课节补偿单检查通过与否，true 通过，false 不通过',
        },
        lessonPass: {
          type: 'boolean',
          description: '课节(账本)检查通过与否，true 通过，false 不通过',
        },
        orderGiftPass: {
          type: 'boolean',
          description: '赠课申请检查通过与否，true 通过，false 不通过',
        },
      },
      title: '订单退费前检查结果 model',
    },
    '订单退费申请 model': {
      type: 'object',
      required: [
        'orderId',
        'reason',
        'responsibleParty',
      ],
      properties: {
        orderId: {
          type: 'integer',
          format: 'int64',
          description: '退费订单ID',
          minimum: 1.0,
          exclusiveMinimum: false,
        },
        reason: {
          type: 'integer',
          format: 'int32',
          description: '退费原因，字典：refundReason',
        },
        remarks: {
          type: 'string',
          description: '退费原因详述',
          minLength: 0,
          maxLength: 1000,
        },
        responsibleParty: {
          type: 'integer',
          format: 'int32',
          description: '退费责任方，字典：refundResponsibleParty',
        },
      },
      title: '订单退费申请 model',
    },
    订单退费申请单审批model: {
      type: 'object',
      required: [
        'id',
        'orderId',
        'pass',
        'verifyRemark',
      ],
      properties: {
        id: {
          type: 'integer',
          format: 'int64',
          description: '退费申请单ID',
          minimum: 1.0,
          exclusiveMinimum: false,
        },
        orderId: {
          type: 'integer',
          format: 'int64',
          description: '退费订单ID',
          minimum: 1.0,
          exclusiveMinimum: false,
        },
        pass: {
          type: 'boolean',
          description: '是否通过',
        },
        verifyRemark: {
          type: 'string',
          description: '审批备注',
          minLength: 0,
          maxLength: 200,
        },
      },
      title: '订单退费申请单审批model',
    },
    订单退费申请单详情: {
      type: 'object',
      properties: {
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createDate: {
          type: 'string',
          format: 'date-time',
          description: '创建时间',
        },
        createUserName: {
          type: 'string',
          description: '创建人名字',
        },
        id: {
          type: 'integer',
          format: 'int64',
          description: '退费单ID',
        },
        orderCode: {
          type: 'string',
          description: '退费订单code',
        },
        reason: {
          type: 'integer',
          format: 'int32',
          description: '退费原因，字典：refundReason',
        },
        refundDetailList: {
          type: 'array',
          description: '退费课程详情列表',
          items: {
            $ref: '#/definitions/订单退费课程详情列表 model',
          },
        },
        refundMoney: {
          type: 'number',
          description: '退费总金额',
        },
        remarks: {
          type: 'string',
          description: '退费原因详述',
        },
        responsibleParty: {
          type: 'integer',
          format: 'int32',
          description: '退费责任方，字典：responsibleParty',
        },
        state: {
          type: 'integer',
          format: 'int32',
          description: '退费单状态，字典：refundState',
        },
        stuName: {
          type: 'string',
          description: '学生姓名',
        },
        uid: {
          type: 'integer',
          format: 'int64',
          description: '学生ID',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateDate: {
          type: 'string',
          format: 'date-time',
          description: '更新时间',
        },
        updateUserName: {
          type: 'string',
          description: '更新人名字',
        },
        verifyBy: {
          type: 'integer',
          format: 'int64',
          description: '审批人ID',
        },
        verifyDate: {
          type: 'string',
          format: 'date-time',
          description: '审批时间',
        },
        verifyRemark: {
          type: 'string',
          description: '审批人意见',
        },
        verifyUserName: {
          type: 'string',
          description: '审批人姓名',
        },
      },
      title: '订单退费申请单详情',
    },
    '订单退费课程详情列表 model': {
      type: 'object',
      properties: {
        buyedPrice: {
          type: 'number',
          description: '支付金额总额，（课程购买价）',
        },
        courseName: {
          type: 'string',
          description: '课程名称',
        },
        doneLessonNum: {
          type: 'integer',
          format: 'int32',
          description: '退费已完成课时数=已购已完成课时数+已购补偿已完成课时数-已购补偿课时数',
        },
        giftLessonNum: {
          type: 'integer',
          format: 'int32',
          description: '已赠课时=赠送课时数+赠送补偿课时数',
        },
        oriPrice: {
          type: 'number',
          description: '单个课时原价',
        },
        refundMoney: {
          type: 'number',
          description: '退款金额',
        },
      },
      title: '订单退费课程详情列表 model',
    },
    '试听排课策略 model': {
      type: 'object',
      required: [
        'courseId',
        'startTime',
        'studentUid',
      ],
      properties: {
        courseId: {
          type: 'integer',
          format: 'int64',
          description: '课程ID',
          minimum: 1.0,
          exclusiveMinimum: false,
        },
        standardClassId: {
          type: 'integer',
          format: 'int64',
          description: '上课课序ID',
        },
        startTime: {
          type: 'string',
          format: 'date-time',
          description: '开始时间',
        },
        studentUid: {
          type: 'integer',
          format: 'int64',
          description: '学生UID',
          minimum: 1.0,
          exclusiveMinimum: false,
        },
        tuid: {
          type: 'integer',
          format: 'int64',
          description: '老师UID',
        },
      },
      title: '试听排课策略 model',
    },
    '课件列表查询 model': {
      type: 'object',
      properties: {
        coursewareId: {
          type: 'integer',
          format: 'int64',
          description: '课件ID',
          minimum: 0.0,
          exclusiveMinimum: false,
        },
        coursewareType: {
          type: 'integer',
          format: 'int32',
          description: '课件类型',
        },
        createBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '创建开始时间',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createEndDate: {
          type: 'string',
          format: 'date-time',
          description: '创建结束时间',
        },
        id: {
          type: 'integer',
          format: 'int64',
          description: 'ID',
          minimum: 0.0,
          exclusiveMinimum: false,
        },
        name: {
          type: 'string',
          description: '课件名称',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,第N页,默认1',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,每页N条记录,默认20',
        },
        standardClassIds: {
          type: 'array',
          items: {
            type: 'integer',
            format: 'int64',
          },
        },
        status: {
          type: 'integer',
          format: 'int32',
          description: '审核状态 0待审核/1审核通过/2审核不通过/10废弃',
          minimum: 0.0,
          exclusiveMinimum: false,
        },
        teachingType: {
          type: 'integer',
          format: 'int32',
          description: '教学类型',
        },
        textBookId: {
          type: 'integer',
          format: 'int64',
          description: '教材ID',
        },
        updateBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '更新开始时间',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateEndDate: {
          type: 'string',
          format: 'date-time',
          description: '更新结束时间',
        },
        verifyBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '审核查询时间开始',
        },
        verifyBy: {
          type: 'integer',
          format: 'int64',
          description: '审核人uid',
          minimum: 0.0,
          exclusiveMinimum: false,
        },
        verifyEndDate: {
          type: 'string',
          format: 'date-time',
          description: '审核查询时间结束',
        },
      },
      title: '课件列表查询 model',
    },
    '课件新增查询 model': {
      type: 'object',
      required: [
        'coursewareId',
        'coursewareType',
        'standardClassId',
      ],
      properties: {
        coursewareId: {
          type: 'integer',
          format: 'int64',
          description: '课件ID',
          minimum: 0.0,
          exclusiveMinimum: false,
        },
        coursewareType: {
          type: 'integer',
          format: 'int32',
        },
        standardClassId: {
          type: 'integer',
          format: 'int64',
          description: '课序ID',
          minimum: 0.0,
          exclusiveMinimum: false,
        },
      },
      title: '课件新增查询 model',
    },
    '课序 model': {
      type: 'object',
      properties: {
        addrUrl: {
          type: 'string',
          description: '课件地址',
        },
        aftAddrUrl: {
          type: 'string',
        },
        chapterId: {
          type: 'integer',
          format: 'int64',
          description: '章节ID',
        },
        cname: {
          type: 'string',
          description: '课程名称',
        },
        code: {
          type: 'string',
          description: '课序编码',
        },
        coursewareId: {
          type: 'integer',
          format: 'int64',
          description: '课序课件ID,课件审核完后，会写该字段',
        },
        coursewareName: {
          type: 'string',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createDate: {
          type: 'string',
          format: 'date-time',
          description: '创建时间',
        },
        createUserName: {
          type: 'string',
          description: '创建人名字',
        },
        ext: {
          type: 'string',
          description: '教学内容扩展字段',
        },
        extResUrl: {
          type: 'string',
          description: '课序资源',
        },
        id: {
          type: 'integer',
          format: 'int64',
        },
        modifyFlag: {
          type: 'integer',
          format: 'int32',
          description: '是否变动,方便前端比较审核',
        },
        name: {
          type: 'string',
          description: '课序名称',
        },
        preAddrUrl: {
          type: 'string',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        seq: {
          type: 'integer',
          format: 'int32',
          description: '课序顺序,同一个级别上的序号',
        },
        standardClassCode: {
          type: 'string',
          description: '课序编号',
        },
        teachingType: {
          type: 'integer',
          format: 'int32',
          description: '教学类型',
        },
        textBookCode: {
          type: 'string',
          description: '教材编号',
        },
        textBookId: {
          type: 'integer',
          format: 'int64',
          description: '教材ID',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateDate: {
          type: 'string',
          format: 'date-time',
          description: '更新时间',
        },
        updateUserName: {
          type: 'string',
          description: '更新人名字',
        },
        verifyBy: {
          type: 'integer',
          format: 'int64',
          description: '审核人uid',
        },
        verifyDate: {
          type: 'string',
          format: 'date-time',
          description: '审核日期',
        },
      },
      title: '课序 model',
    },
    课序Model: {
      type: 'object',
      properties: {
        addrUrl: {
          type: 'string',
          description: '课件地址',
        },
        aftAddrUrl: {
          type: 'string',
        },
        chapterId: {
          type: 'integer',
          format: 'int64',
          description: '章节ID',
        },
        cname: {
          type: 'string',
          description: '课程名称',
        },
        code: {
          type: 'string',
          description: '课序编码',
        },
        content: {
          type: 'string',
          description: '上课内容',
        },
        coursewareId: {
          type: 'integer',
          format: 'int64',
          description: '课序课件ID,课件审核完后，会写该字段',
        },
        coursewareName: {
          type: 'string',
          description: '课件名称',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createDate: {
          type: 'string',
          format: 'date-time',
          description: '创建时间',
        },
        createUserName: {
          type: 'string',
          description: '创建人名字',
        },
        extResUrl: {
          type: 'string',
          description: '课序资源',
        },
        goal: {
          type: 'string',
          description: '上课目标',
        },
        goalCh: {
          type: 'string',
          description: '上课目标中文描述',
        },
        grammar: {
          type: 'string',
          description: '语法',
        },
        grammarCh: {
          type: 'string',
          description: '语法中文描述',
        },
        id: {
          type: 'integer',
          format: 'int64',
        },
        letter: {
          type: 'string',
          description: '字母',
        },
        modifyFlag: {
          type: 'integer',
          format: 'int32',
          description: '是否变动,方便前端比较审核',
        },
        name: {
          type: 'string',
          description: '课序名称',
        },
        preAddrUrl: {
          type: 'string',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        sentencePattern: {
          type: 'string',
          description: '句型',
        },
        seq: {
          type: 'integer',
          format: 'int32',
          description: '课序顺序,同一个级别上的序号',
        },
        standardClassCode: {
          type: 'string',
          description: '课序编号',
        },
        teachingType: {
          type: 'integer',
          format: 'int32',
          description: '教学类型',
        },
        textBookCode: {
          type: 'string',
          description: '教材编号',
        },
        textBookId: {
          type: 'integer',
          format: 'int64',
          description: '教材ID',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateDate: {
          type: 'string',
          format: 'date-time',
          description: '更新时间',
        },
        updateUserName: {
          type: 'string',
          description: '更新人名字',
        },
        verifyBy: {
          type: 'integer',
          format: 'int64',
          description: '审核人uid',
        },
        verifyDate: {
          type: 'string',
          format: 'date-time',
          description: '审核日期',
        },
        words: {
          type: 'string',
          description: '词语',
        },
      },
      title: '课序Model',
    },
    '课序内容更新 model': {
      type: 'object',
      properties: {
        ext: {
          type: 'string',
          description: '教学内容扩展字段',
        },
        knowledgeIds: {
          type: 'array',
          description: '知识点ID',
          items: {
            type: 'integer',
            format: 'int64',
          },
        },
      },
      title: '课序内容更新 model',
    },
    课程新增参数: {
      type: 'object',
      required: [
        'classType',
        'courseType',
        'lessonTime',
        'product',
        'teacherRemuneration',
        'templateId',
        'textBookId',
      ],
      properties: {
        classType: {
          type: 'integer',
          format: 'int32',
          description: '班型(1:1v1个性化 2:1v1标准化 2:班课)',
        },
        courseType: {
          type: 'integer',
          format: 'int32',
          description: '课程类型(1:主修 2:选修 3:试听)',
        },
        cycleFlag: {
          type: 'integer',
          format: 'int32',
          description: '课序是否循环',
        },
        grades: {
          type: 'array',
          description: '年级',
          items: {
            type: 'string',
          },
        },
        lessonTime: {
          type: 'integer',
          format: 'int64',
          description: '课节时长',
        },
        product: {
          description: '产品信息',
          $ref: '#/definitions/产品信息新增model',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        subject: {
          type: 'integer',
          format: 'int32',
          description: '科目',
        },
        teacherRemuneration: {
          type: 'integer',
          format: 'int64',
          description: '教师薪酬',
          minimum: 0.0,
          exclusiveMinimum: false,
        },
        templateId: {
          type: 'integer',
          format: 'int64',
          description: '模板类型',
        },
        textBookId: {
          type: 'integer',
          format: 'int64',
          description: '教材id',
        },
      },
      title: '课程新增参数',
    },
    课程查询model: {
      type: 'object',
      properties: {
        classType: {
          type: 'integer',
          format: 'int32',
          description: '班型',
          minimum: 0.0,
          exclusiveMinimum: false,
        },
        courseType: {
          type: 'integer',
          format: 'int32',
          description: '课程类型',
          minimum: 0.0,
          exclusiveMinimum: false,
        },
        createBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '创建开始时间',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createEndDate: {
          type: 'string',
          format: 'date-time',
          description: '创建结束时间',
        },
        id: {
          type: 'integer',
          format: 'int64',
          description: '课程id',
          minimum: 0.0,
          exclusiveMinimum: false,
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,第N页,默认1',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,每页N条记录,默认20',
        },
        product: {
          description: '产品参数',
          $ref: '#/definitions/产品信息查询对象',
        },
        subject: {
          type: 'integer',
          format: 'int32',
          description: '科目',
          minimum: 0.0,
          exclusiveMinimum: false,
        },
        textBookEnName: {
          type: 'string',
          description: '课本英文名',
          minLength: 0,
          maxLength: 64,
        },
        textBookId: {
          type: 'integer',
          format: 'int64',
          description: '教材id',
          minimum: 0.0,
          exclusiveMinimum: false,
        },
        updateBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '更新开始时间',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateEndDate: {
          type: 'string',
          format: 'date-time',
          description: '更新结束时间',
        },
      },
      title: '课程查询model',
    },
    课程返回model: {
      type: 'object',
      properties: {
        bLearnableAnyTime: {
          type: 'integer',
          format: 'int32',
          description: '是否随到随学 0:否 1：是',
        },
        classType: {
          type: 'integer',
          format: 'int32',
          description: '班型',
        },
        courseType: {
          type: 'integer',
          format: 'int32',
          description: '课程类型,1 主修 2 选修 3 试听',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createDate: {
          type: 'string',
          format: 'date-time',
          description: '创建时间',
        },
        createUserName: {
          type: 'string',
          description: '创建人名字',
        },
        cycleFlag: {
          type: 'integer',
          format: 'int32',
          description: '课序是否循环',
        },
        grades: {
          type: 'array',
          description: '年级',
          items: {
            type: 'string',
          },
        },
        id: {
          type: 'integer',
          format: 'int64',
        },
        lessonTime: {
          type: 'integer',
          format: 'int64',
          description: '课节时长-弃用',
        },
        product: {
          $ref: '#/definitions/TbProductDto',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        subject: {
          type: 'integer',
          format: 'int32',
          description: '科目',
        },
        teacherRemuneration: {
          type: 'integer',
          format: 'int64',
          description: '教师薪酬',
        },
        templateId: {
          type: 'integer',
          format: 'int64',
          description: '模板类型',
        },
        textBookChName: {
          type: 'string',
          description: '教材中文名',
        },
        textBookEnName: {
          type: 'string',
          description: '教材英文名',
        },
        textBookId: {
          type: 'integer',
          format: 'int64',
          description: '教材id',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateDate: {
          type: 'string',
          format: 'date-time',
          description: '更新时间',
        },
        updateUserName: {
          type: 'string',
          description: '更新人名字',
        },
      },
      title: '课程返回model',
    },
    课节查询model: {
      type: 'object',
      properties: {
        abnormal: {
          type: 'integer',
          format: 'int64',
          description: '异常代码',
        },
        abnormalDesc: {
          type: 'string',
          description: '异常具体描述',
        },
        actualDuration: {
          type: 'integer',
          format: 'int32',
          description: '实际上课时长',
        },
        addrUrl: {
          type: 'string',
          description: '课件地址',
        },
        aftAddrUrl: {
          type: 'string',
        },
        bizLessonId: {
          type: 'string',
          description: '业务课节ID',
        },
        busiType: {
          type: 'integer',
          format: 'int32',
          description: '业务类型',
        },
        cancelBy: {
          type: 'integer',
          format: 'int64',
          description: '取消人',
        },
        cancelDate: {
          type: 'string',
          format: 'date-time',
          description: '取消时间',
        },
        cancelReason: {
          type: 'string',
          description: '取消原因',
        },
        cancelRemark: {
          type: 'string',
          description: '取消备注',
        },
        classType: {
          type: 'integer',
          format: 'int32',
          description: '班型',
        },
        cname: {
          type: 'string',
        },
        courseId: {
          type: 'integer',
          format: 'int64',
          description: '课程id',
        },
        courseName: {
          type: 'string',
          description: '课程名称',
        },
        courseType: {
          type: 'integer',
          format: 'int32',
          description: '课程类型',
        },
        coursewareName: {
          type: 'string',
          description: '课件名字',
        },
        cover: {
          type: 'string',
          description: 'ppt封面',
        },
        createBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '创建开始时间',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建者uid',
        },
        createDate: {
          type: 'string',
          format: 'date-time',
          description: '创建时间',
        },
        createEndDate: {
          type: 'string',
          format: 'date-time',
          description: '创建结束时间',
        },
        createUserName: {
          type: 'string',
          description: '创建人名字',
        },
        endTime: {
          type: 'string',
          format: 'date-time',
          description: '结束时间',
        },
        extResUrl: {
          type: 'string',
        },
        fromRows: {
          $ref: '#/definitions/FromRows',
        },
        id: {
          type: 'integer',
          format: 'int64',
          description: 'ID',
        },
        lessonCompenSate: {
          type: 'integer',
          format: 'int32',
          description: '课节补偿情况：1-不存在补偿单（或审批不通过）可以补偿，2-存在进行中的补偿单，3-存在审批通过的补偿单',
        },
        lessonName: {
          type: 'string',
          description: '课节名称（课序Code）',
        },
        lessonNum: {
          type: 'number',
          format: 'float',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,第N页,默认1',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,每页N条记录,默认20',
        },
        pptIndex: {
          type: 'string',
          description: 'pptIndex',
        },
        preAddrUrl: {
          type: 'string',
        },
        remarks: {
          type: 'string',
          description: '备注',
          readOnly: true,
        },
        replay: {
          type: 'string',
          description: '录播地址',
        },
        sid: {
          type: 'integer',
          format: 'int64',
          description: '房间号',
        },
        sourceType: {
          type: 'integer',
          format: 'int32',
          description: '课程来源',
        },
        standardClassCode: {
          type: 'string',
        },
        standardClassId: {
          type: 'integer',
          format: 'int64',
          description: '课序id',
        },
        startTime: {
          type: 'string',
          format: 'date-time',
          description: '开始时间',
        },
        state: {
          type: 'integer',
          format: 'int32',
          description: '状态',
        },
        studentMobile: {
          type: 'string',
          description: '学生手机号',
        },
        studentName: {
          type: 'string',
          description: '学生名字',
        },
        studentUid: {
          type: 'integer',
          format: 'int64',
          description: '学生uid',
        },
        subject: {
          type: 'integer',
          format: 'int32',
          description: '科目',
        },
        teacherCancelCount: {
          type: 'integer',
          format: 'int32',
          description: '老师取消次数',
        },
        teacherEndTime: {
          type: 'string',
          format: 'date-time',
          description: '老师结束时间',
        },
        teacherMobile: {
          type: 'string',
          description: '老师手机号',
        },
        teacherName: {
          type: 'string',
          description: '老师名字',
        },
        teacherStartTime: {
          type: 'string',
          format: 'date-time',
          description: '老师开始时间',
        },
        teacherState: {
          type: 'integer',
          format: 'int32',
          description: '老师课节状态',
        },
        teachingType: {
          type: 'integer',
          format: 'int32',
          description: '教学类型',
        },
        textBookCode: {
          type: 'string',
        },
        title: {
          type: 'string',
          description: '课节标题',
        },
        tuid: {
          type: 'integer',
          format: 'int64',
          description: '老师uid',
        },
        updateBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '更新开始时间',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新者uid',
        },
        updateDate: {
          type: 'string',
          format: 'date-time',
          description: '更新时间',
        },
        updateEndDate: {
          type: 'string',
          format: 'date-time',
          description: '更新结束时间',
        },
        updateUserName: {
          type: 'string',
          description: '更新人名字',
        },
      },
      title: '课节查询model',
    },
    '账本 model': {
      type: 'object',
      properties: {
        availableNum: {
          type: 'integer',
          format: 'int32',
          description: '可用课程',
        },
        deadline: {
          type: 'string',
          format: 'date-time',
          description: '课程有效期',
        },
      },
      title: '账本 model',
    },
    '账本日志 model': {
      type: 'object',
      properties: {
        cname: {
          type: 'string',
          description: '课程名',
        },
        courseId: {
          type: 'integer',
          format: 'int64',
          description: '课程ID',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createDate: {
          type: 'string',
          format: 'date-time',
          description: '创建时间',
        },
        createUserName: {
          type: 'string',
          description: '创建人名字',
        },
        envCode: {
          type: 'string',
          description: '变更编码',
        },
        envType: {
          type: 'string',
          description: '变更类型，字典：envType',
        },
        id: {
          type: 'integer',
          format: 'int64',
        },
        num: {
          type: 'integer',
          format: 'int32',
          description: '变更数',
        },
        operType: {
          type: 'string',
          description: '操作类型，字典：operType',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        uid: {
          type: 'integer',
          format: 'int64',
          description: '学生UID',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateDate: {
          type: 'string',
          format: 'date-time',
          description: '更新时间',
        },
        updateUserName: {
          type: 'string',
          description: '更新人名字',
        },
      },
      title: '账本日志 model',
    },
    '账本日志请求 model': {
      type: 'object',
      properties: {
        courseId: {
          type: 'integer',
          format: 'int64',
          description: '课程ID',
        },
        createBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '创建开始时间',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createEndDate: {
          type: 'string',
          format: 'date-time',
          description: '创建结束时间',
        },
        envType: {
          type: 'string',
          description: '变更类型，字典：envType',
        },
        operType: {
          type: 'string',
          description: '操作类型，字典：operType',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,第N页,默认1',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,每页N条记录,默认20',
        },
        uid: {
          type: 'integer',
          format: 'int64',
          description: '学生UID',
        },
        updateBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '更新开始时间',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateEndDate: {
          type: 'string',
          format: 'date-time',
          description: '更新结束时间',
        },
      },
      title: '账本日志请求 model',
    },
    '赠课申请分页查询 model': {
      type: 'object',
      properties: {
        createBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '创建开始时间',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createEndDate: {
          type: 'string',
          format: 'date-time',
          description: '创建结束时间',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,第N页,默认1',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,每页N条记录,默认20',
        },
        state: {
          type: 'integer',
          format: 'int32',
          description: '赠送单状态，字典:giftState',
        },
        uid: {
          type: 'integer',
          format: 'int64',
          description: '学生ID',
        },
        updateBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '更新开始时间',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateEndDate: {
          type: 'string',
          format: 'date-time',
          description: '更新结束时间',
        },
      },
      title: '赠课申请分页查询 model',
    },
    '赠课申请分页查询结果 model': {
      type: 'object',
      properties: {
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createDate: {
          type: 'string',
          format: 'date-time',
          description: '创建时间',
        },
        createUserName: {
          type: 'string',
          description: '创建人名字',
        },
        id: {
          type: 'integer',
          format: 'int64',
        },
        lessonNum: {
          type: 'integer',
          format: 'int32',
          description: '赠送课时数',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        state: {
          type: 'integer',
          format: 'int32',
          description: '赠送单状态，字典:giftState',
        },
        stuName: {
          type: 'string',
          description: '学生姓名',
        },
        uid: {
          type: 'integer',
          format: 'int64',
          description: '学生ID',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateDate: {
          type: 'string',
          format: 'date-time',
          description: '更新时间',
        },
        updateUserName: {
          type: 'string',
          description: '更新人名字',
        },
      },
      title: '赠课申请分页查询结果 model',
    },
    '赠课申请详情 model': {
      type: 'object',
      properties: {
        attachment: {
          type: 'string',
          description: '图片url,json数组字符串',
        },
        courseName: {
          type: 'string',
          description: '所属课程名称',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createDate: {
          type: 'string',
          format: 'date-time',
          description: '创建时间',
        },
        createUserName: {
          type: 'string',
          description: '创建人名字',
        },
        id: {
          type: 'integer',
          format: 'int64',
          description: '赠课单ID',
        },
        lessonNum: {
          type: 'integer',
          format: 'int32',
          description: '赠送课时数',
        },
        orderCode: {
          type: 'string',
          description: '所属订单Code',
        },
        reason: {
          type: 'integer',
          format: 'int32',
          description: '赠课原因，字典：giftReason',
        },
        remarks: {
          type: 'string',
          description: '赠课原因详述',
        },
        state: {
          type: 'integer',
          format: 'int32',
          description: '赠送单状态，字典:giftState',
        },
        stuName: {
          type: 'string',
          description: '学生姓名',
        },
        uid: {
          type: 'integer',
          format: 'int64',
          description: '学生ID',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateDate: {
          type: 'string',
          format: 'date-time',
          description: '更新时间',
        },
        updateUserName: {
          type: 'string',
          description: '更新人名字',
        },
        verifyBy: {
          type: 'integer',
          format: 'int64',
          description: '审核人ID',
        },
        verifyDate: {
          type: 'string',
          format: 'date-time',
          description: '审核时间',
        },
        verifyRemark: {
          type: 'string',
          description: '审核意见',
        },
        verifyUserName: {
          type: 'string',
          description: '审核人姓名',
        },
      },
      title: '赠课申请详情 model',
    },
    '退费申请分页查询结果 model': {
      type: 'object',
      properties: {
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createDate: {
          type: 'string',
          format: 'date-time',
          description: '创建时间',
        },
        createUserName: {
          type: 'string',
          description: '创建人名字',
        },
        id: {
          type: 'integer',
          format: 'int64',
        },
        orderCode: {
          type: 'string',
          description: '退费订单code',
        },
        orderId: {
          type: 'integer',
          format: 'int64',
          description: '退费订单Id',
        },
        refundMoney: {
          type: 'number',
          description: '退费总金额',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        state: {
          type: 'integer',
          format: 'int32',
          description: '退费单状态，字典：refundState',
        },
        stuName: {
          type: 'string',
          description: '学生姓名',
        },
        uid: {
          type: 'integer',
          format: 'int64',
          description: '学生ID',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateDate: {
          type: 'string',
          format: 'date-time',
          description: '更新时间',
        },
        updateUserName: {
          type: 'string',
          description: '更新人名字',
        },
      },
      title: '退费申请分页查询结果 model',
    },
    '阿里云 OSS Token 凭证': {
      type: 'object',
      properties: {
        accessKeyId: {
          type: 'string',
          description: 'accessKeyId',
        },
        accessKeySecret: {
          type: 'string',
          description: 'accessKeySecret',
        },
        expiration: {
          type: 'string',
          description: 'expiration',
        },
        securityToken: {
          type: 'string',
          description: 'securityToken',
        },
      },
      title: '阿里云 OSS Token 凭证',
    },
    '音视频学习记录分页列表响应 model': {
      type: 'object',
      properties: {
        chapterId: {
          type: 'integer',
          format: 'int64',
          description: '章节id',
        },
        chapterName: {
          type: 'string',
          description: '章节（单元）名称',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createDate: {
          type: 'string',
          format: 'date-time',
          description: '创建时间',
        },
        createUserName: {
          type: 'string',
          description: '创建人名字',
        },
        dayDuration: {
          type: 'integer',
          format: 'int64',
          description: '天视频观看时长',
        },
        duration: {
          type: 'integer',
          format: 'int32',
          description: '视频观看时长',
        },
        id: {
          type: 'integer',
          format: 'int64',
        },
        position: {
          type: 'integer',
          format: 'int32',
          description: '视频观看位置',
        },
        productId: {
          type: 'integer',
          format: 'int64',
          description: '产品ID',
        },
        productName: {
          type: 'string',
          description: '产品（课程）名称',
        },
        remarks: {
          type: 'string',
          description: '备注',
        },
        startTime: {
          type: 'string',
          format: 'date-time',
          description: '开始时间',
        },
        studyId: {
          type: 'integer',
          format: 'int64',
          description: '学习类型（如：磨耳朵）ID',
        },
        studyName: {
          type: 'string',
          description: '学习类型（如：磨耳朵）名称、标题',
        },
        studyType: {
          type: 'integer',
          format: 'int32',
          description: '学习类型 1:磨耳朵单元',
        },
        textBookId: {
          type: 'integer',
          format: 'int64',
          description: '教材id',
        },
        textBookMaterialId: {
          type: 'integer',
          format: 'int64',
          description: '教材资源ID',
        },
        textBookMaterialName: {
          type: 'string',
          description: '教材资源名称',
        },
        uid: {
          type: 'integer',
          format: 'int64',
          description: '学生uid',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateDate: {
          type: 'string',
          format: 'date-time',
          description: '更新时间',
        },
        updateUserName: {
          type: 'string',
          description: '更新人名字',
        },
      },
      title: '音视频学习记录分页列表响应 model',
    },
    音视频学习记录分页列表请求model: {
      type: 'object',
      required: [
        'uid',
      ],
      properties: {
        createBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '创建开始时间',
        },
        createBy: {
          type: 'integer',
          format: 'int64',
          description: '创建人',
        },
        createEndDate: {
          type: 'string',
          format: 'date-time',
          description: '创建结束时间',
        },
        pageNo: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,第N页,默认1',
        },
        pageSize: {
          type: 'integer',
          format: 'int32',
          description: '分页参数,每页N条记录,默认20',
        },
        startTimeFrom: {
          type: 'string',
          format: 'date-time',
          description: '操作开始时间，日期的话，时分秒：00:00:00',
        },
        startTimeTo: {
          type: 'string',
          format: 'date-time',
          description: '操作结束时间，日期的话，时分秒：23:59:59',
        },
        uid: {
          type: 'integer',
          format: 'int64',
          description: '学生ID',
        },
        updateBeginDate: {
          type: 'string',
          format: 'date-time',
          description: '更新开始时间',
        },
        updateBy: {
          type: 'integer',
          format: 'int64',
          description: '更新人',
        },
        updateEndDate: {
          type: 'string',
          format: 'date-time',
          description: '更新结束时间',
        },
      },
      title: '音视频学习记录分页列表请求model',
    },
  },
};
