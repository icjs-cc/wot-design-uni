import type { ExtractPropTypes } from 'vue'
import { baseProps, makeBooleanProp, makeStringProp } from '../common/props'

export type ClosePosition = 'inset' | 'top' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
export type CloseIconName = 'close-outline' | 'close'

export const curtainProps = {
  ...baseProps,
  /**
   * 绑定值，展示/关闭幕帘
   */
  value: makeBooleanProp(false),
  /**
   * 关闭按钮位置，可选值：inset / top / bottom / top-left / top-right / bottom-left / bottom-right
   */
  closePosition: makeStringProp<ClosePosition>('inset'),
  /**
   * 幕帘图片地址，必须使用网络地址
   */
  src: String,
  /**
   * 幕帘图片点击链接
   */
  to: String,
  /**
   * 幕帘图片宽度
   */
  width: Number,
  /**
   * 点击遮罩是否关闭
   */
  closeOnClickModal: makeBooleanProp(false),
  /**
   * 是否当关闭时将弹出层隐藏（display: none)
   */
  hideWhenClose: makeBooleanProp(true),
  /**
   * 关闭按钮图标，可选值：close-outline / close
   */
  closeIconName: makeStringProp<CloseIconName>('close-outline'),
  /**
   * 图标的字体大小
   */
  closeIconSize: String,
  /**
   * 图标的字体颜色
   */
  closeIconColor: String
}

export type CurtainProps = ExtractPropTypes<typeof curtainProps>
