interface I_BaseData {
  email: string
  password: string
}

export interface I_DataToSend extends I_BaseData {
  name?: string
}

export interface I_StateData extends I_BaseData {
  name: string
  repPassword: string
}

export interface I_FormBaseProps {
  register?: boolean
}
