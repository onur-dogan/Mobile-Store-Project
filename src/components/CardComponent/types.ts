import { FakeStoreAPIModel } from "../../models/apiModels/types"

type props = {
    model : FakeStoreAPIModel,
    onClickToNavigation ?: () => void
}

export type Props = props