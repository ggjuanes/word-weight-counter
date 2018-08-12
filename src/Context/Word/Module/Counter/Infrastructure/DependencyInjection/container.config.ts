import container from "../../../../../Shared/Infrastructure/DependencyInjection/container";
import WeightCounter from "../../Application/WeightCounter";
import IWeightCounter from "../../Domain/IWeightCounter";
import IWeightSelector from "../../Domain/IWeightSelector";
import WeightSelectorJson from "../WeightSelectorJson";
import SERVICES from "./services";

container.bind<IWeightSelector>(SERVICES.IWeightSelector).to(WeightSelectorJson);
container.bind<IWeightCounter>(SERVICES.IWeightCounter).to(WeightCounter);
