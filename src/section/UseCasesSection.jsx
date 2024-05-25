import UseCaseComponent from "../components/UseCaseComponent";
import {useCases} from "../constants/usecase";

const UseCasesSection = () => {
    return (
      <div className="use-cases-section py-8">
        {useCases.map((useCase, index) => (
          <UseCaseComponent
            key={index}
            id={useCase.id}
            image={useCase.image}
            title={useCase.title}
            description={useCase.description}
            reverse={index % 2 === 1} 
          />
        ))}
      </div>
    );
  };

export default UseCasesSection