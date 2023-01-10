import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);
  const handelModalShow = () => {
    setShowModal(true);
  };
  const handelClose = () => {
    setShowModal(false);
  };
  const actionBarContent = (
    <Button primary onClick={handelClose}>
      I Accept
    </Button>
  );
  const modal = (
    <Modal onClose={handelClose} actionBar={actionBarContent}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div>
      <Button primary onClick={handelModalShow}>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin orci
        odio, finibus vel sapien at, cursus fermentum metus. Nam vulputate ante
        a ligula laoreet rutrum. Morbi eget justo id ipsum scelerisque
        vulputate. Vivamus risus leo, semper a sodales id, euismod et mauris.
        Suspendisse facilisis ornare leo sit amet tempor. Nunc pretium neque
        eget imperdiet vestibulum. Nam aliquet, massa vitae faucibus
        scelerisque, nibh mauris varius dui, eget ultricies nibh tellus eget
        neque. Vivamus imperdiet neque quam. Nam venenatis nisi vel aliquam
        pellentesque. Integer rutrum ante et mi volutpat, at tristique odio
        ullamcorper. Praesent vestibulum odio vel magna lobortis malesuada.
        Nullam sed dolor eget enim venenatis venenatis. Maecenas lectus dolor,
        tincidunt id tellus id, maximus egestas quam. Donec lacinia neque ut
        orci dapibus, sed ultrices ligula rhoncus. Suspendisse eget posuere
        lorem, a laoreet nibh. Ut eu libero pulvinar, feugiat urna in, dictum
        odio. Maecenas molestie purus et dolor lobortis, eget imperdiet tortor
        semper. Sed et ornare augue. Morbi at erat ipsum. Sed vulputate odio vel
        erat gravida, at ultrices tellus interdum. Curabitur eu turpis orci. Ut
        quis mauris justo. Quisque ornare aliquam lacus, sit amet rhoncus velit
        tempus at. Donec vitae arcu tincidunt, molestie metus ut, laoreet ante.
        Aliquam porta eleifend viverra. Integer volutpat mi ut eleifend tempus.
        Aliquam at odio eu arcu blandit posuere et quis magna. Fusce et
        venenatis ex, ut tempus magna. Pellentesque finibus, eros vel facilisis
        dapibus, quam nisi bibendum sem, vitae aliquet est massa vel turpis.
        Curabitur consectetur nisi felis, iaculis luctus mi pharetra at. Proin
        bibendum ultrices nisl eget volutpat. Aenean imperdiet eget nisi id
        eleifend. Etiam sollicitudin metus nisl, eu vulputate turpis suscipit
        at. Integer a nibh vel turpis iaculis dignissim non ac lacus. Ut odio
        felis, semper nec bibendum elementum, scelerisque sit amet ligula.
        Maecenas cursus accumsan nisi nec porta. Morbi enim purus, ultricies in
        quam congue, viverra congue lorem. Phasellus lobortis arcu vel neque
        mattis interdum. Integer accumsan dui quis laoreet mattis. Nulla
        tincidunt sapien vel dui ultricies, vel fermentum nulla vehicula.
        Vivamus semper pretium semper. Aenean ullamcorper tortor sit amet lorem
        egestas blandit. Maecenas posuere commodo est, eu congue nulla feugiat
        ac. Aenean odio tellus, fermentum ac ornare vitae, sagittis ac diam.
        Nunc mi felis, viverra sed ex sit amet, rutrum mollis erat. Sed lobortis
        felis quam, at semper diam molestie at. Ut ante felis, tempus sed
        volutpat efficitur, consectetur eu leo. Ut ut convallis eros. Curabitur
        pharetra est sit amet sem ullamcorper, ac bibendum eros vehicula. Nullam
        bibendum dolor at blandit ultricies. Phasellus nec urna varius ligula
        semper congue eget at magna. Duis aliquam ligula ex, in sagittis metus
        accumsan non. Proin blandit lacus nibh, nec venenatis ante dignissim at.
        Nam rhoncus velit in mauris euismod egestas. Cras auctor leo at leo
        imperdiet, ac aliquet ipsum mattis. Pellentesque interdum pharetra diam
        viverra placerat. Nam venenatis arcu nec massa dictum aliquet.
        Pellentesque tempor eleifend purus sit amet sollicitudin. Ut auctor
        lorem nunc, et vestibulum sapien condimentum aliquam. Integer quis
        consequat augue. Duis efficitur erat et est cursus, in sodales purus
        facilisis. Vestibulum vel accumsan metus, id interdum nisi. Sed
        venenatis mi vitae venenatis sollicitudin. Aenean sagittis massa quam,
        ac viverra nibh porttitor quis. Vivamus luctus vestibulum justo vel
        varius. Cras ante dui, facilisis eu sapien vulputate, aliquam convallis
        dui. Nam ut facilisis nunc. Vestibulum porttitor risus vel diam
        pellentesque condimentum. Curabitur varius congue tempus. In efficitur
        nulla vitae egestas eleifend. In hac habitasse platea dictumst. Integer
        non lorem et erat vulputate porta.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin orci
        odio, finibus vel sapien at, cursus fermentum metus. Nam vulputate ante
        a ligula laoreet rutrum. Morbi eget justo id ipsum scelerisque
        vulputate. Vivamus risus leo, semper a sodales id, euismod et mauris.
        Suspendisse facilisis ornare leo sit amet tempor. Nunc pretium neque
        eget imperdiet vestibulum. Nam aliquet, massa vitae faucibus
        scelerisque, nibh mauris varius dui, eget ultricies nibh tellus eget
        neque. Vivamus imperdiet neque quam. Nam venenatis nisi vel aliquam
        pellentesque. Integer rutrum ante et mi volutpat, at tristique odio
        ullamcorper. Praesent vestibulum odio vel magna lobortis malesuada.
        Nullam sed dolor eget enim venenatis venenatis. Maecenas lectus dolor,
        tincidunt id tellus id, maximus egestas quam. Donec lacinia neque ut
        orci dapibus, sed ultrices ligula rhoncus. Suspendisse eget posuere
        lorem, a laoreet nibh. Ut eu libero pulvinar, feugiat urna in, dictum
        odio. Maecenas molestie purus et dolor lobortis, eget imperdiet tortor
        semper. Sed et ornare augue. Morbi at erat ipsum. Sed vulputate odio vel
        erat gravida, at ultrices tellus interdum. Curabitur eu turpis orci. Ut
        quis mauris justo. Quisque ornare aliquam lacus, sit amet rhoncus velit
        tempus at. Donec vitae arcu tincidunt, molestie metus ut, laoreet ante.
        Aliquam porta eleifend viverra. Integer volutpat mi ut eleifend tempus.
        Aliquam at odio eu arcu blandit posuere et quis magna. Fusce et
        venenatis ex, ut tempus magna. Pellentesque finibus, eros vel facilisis
        dapibus, quam nisi bibendum sem, vitae aliquet est massa vel turpis.
        Curabitur consectetur nisi felis, iaculis luctus mi pharetra at. Proin
        bibendum ultrices nisl eget volutpat. Aenean imperdiet eget nisi id
        eleifend. Etiam sollicitudin metus nisl, eu vulputate turpis suscipit
        at. Integer a nibh vel turpis iaculis dignissim non ac lacus. Ut odio
        felis, semper nec bibendum elementum, scelerisque sit amet ligula.
        Maecenas cursus accumsan nisi nec porta. Morbi enim purus, ultricies in
        quam congue, viverra congue lorem. Phasellus lobortis arcu vel neque
        mattis interdum. Integer accumsan dui quis laoreet mattis. Nulla
        tincidunt sapien vel dui ultricies, vel fermentum nulla vehicula.
        Vivamus semper pretium semper. Aenean ullamcorper tortor sit amet lorem
        egestas blandit. Maecenas posuere commodo est, eu congue nulla feugiat
        ac. Aenean odio tellus, fermentum ac ornare vitae, sagittis ac diam.
        Nunc mi felis, viverra sed ex sit amet, rutrum mollis erat. Sed lobortis
        felis quam, at semper diam molestie at. Ut ante felis, tempus sed
        volutpat efficitur, consectetur eu leo. Ut ut convallis eros. Curabitur
        pharetra est sit amet sem ullamcorper, ac bibendum eros vehicula. Nullam
        bibendum dolor at blandit ultricies. Phasellus nec urna varius ligula
        semper congue eget at magna. Duis aliquam ligula ex, in sagittis metus
        accumsan non. Proin blandit lacus nibh, nec venenatis ante dignissim at.
        Nam rhoncus velit in mauris euismod egestas. Cras auctor leo at leo
        imperdiet, ac aliquet ipsum mattis. Pellentesque interdum pharetra diam
        viverra placerat. Nam venenatis arcu nec massa dictum aliquet.
        Pellentesque tempor eleifend purus sit amet sollicitudin. Ut auctor
        lorem nunc, et vestibulum sapien condimentum aliquam. Integer quis
        consequat augue. Duis efficitur erat et est cursus, in sodales purus
        facilisis. Vestibulum vel accumsan metus, id interdum nisi. Sed
        venenatis mi vitae venenatis sollicitudin. Aenean sagittis massa quam,
        ac viverra nibh porttitor quis. Vivamus luctus vestibulum justo vel
        varius. Cras ante dui, facilisis eu sapien vulputate, aliquam convallis
        dui. Nam ut facilisis nunc. Vestibulum porttitor risus vel diam
        pellentesque condimentum. Curabitur varius congue tempus. In efficitur
        nulla vitae egestas eleifend. In hac habitasse platea dictumst. Integer
        non lorem et erat vulputate porta.
      </p>
    </div>
  );
}

export default ModalPage;
