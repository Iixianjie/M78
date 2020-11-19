import React, { useEffect } from 'react';
import Tree from 'm78/tree';
import { OptionsItem } from 'm78/tree/types';
import Modal from 'm78/modal';
import ErrorBoundary from 'm78/error-boundary';
import { Divider } from 'm78/layout';
import create, { AuthTypeEnum } from 'm78/auth';
import Button from 'm78/button';
import Message from 'm78/message';
import { delay } from '@lxjx/utils';

function mockTreeData(length: number, z: number, label = '选项') {
  const ls: OptionsItem[] = [];

  function gn(list: OptionsItem = [], vp: string, cZInd = 0) {
    Array.from({ length }).forEach((_, index) => {
      const v = vp ? `${vp}-${index + 1}` : String(index + 1);
      const children: OptionsItem[] = [];

      const current: OptionsItem = {
        label: `${label} ${v}`,
        value: v,
        children: Math.random() > 0.5 ? [] : undefined,
      };

      list.push(current);

      if (cZInd !== z) {
        current.children = children;
        gn(children, v, cZInd + 1);
      }
    });
  }

  gn(ls, '');

  return ls;
}

const opt = mockTreeData(5, 5);

const { Auth, setDeps } = create({
  /* 被所有验证器依赖数据 */
  dependency: {
    /** 登录用户 */
    user: '',
    /** 是否是管理员 */
    admin: 2,
  },
  /* 声明验证器 */
  validators: {},
});

const Play = () => {
  return (
    <div>
      <Button size="small" onClick={() => setDeps({ user: 'lxj' })}>
        登录
      </Button>
      <Button size="small" onClick={() => setDeps({ user: '' })}>
        退出
      </Button>

      <Auth
        keys={['login']}
        validators={{
          login(deps) {
            if (!deps.user) {
              // 验证未通过时，返回提示信息，还可以同时返回对应的操作
              return {
                label: '未登录',
                desc: '请登录后再进行操作',
                actions: [
                  // 每一项都是一个Button props
                  {
                    label: '去登陆',
                    color: 'red',
                    onClick() {
                      Message.tips({
                        content: '去登陆',
                      });
                    },
                  },
                  {
                    label: '算了',
                    onClick() {
                      Message.tips({
                        content: '算了',
                      });
                    },
                  },
                ],
              };
            }
          },
        }}
      >
        <div className="tc">
          <div className="fs-38">😀</div>
          <div className="fs-24 color-success bold">权限验证通过</div>
          <div className="fs-14 color-second mt-8">这里是需要权限验证的内容</div>
        </div>
      </Auth>

      {/* <Tree */}
      {/*  multipleCheckable */}
      {/*  defaultValue={['1-1-1-1-1-1']} */}
      {/*  rainbowIndicatorLine */}
      {/*  onChange={(a, b) => { */}
      {/*    console.log('change', a, b); */}
      {/*  }} */}
      {/*  dataSource={opt} */}
      {/*  height={400} */}
      {/*  toolbar */}
      {/* /> */}
    </div>
  );
};

export default Play;
