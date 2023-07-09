<?php

namespace GridDesign\RhFeuser\Domain\Model;

class FrontendUser extends \TYPO3\CMS\Extbase\Domain\Model\FrontendUser {
    /**
     * @var boolean
     */
    protected $datenschutz;

    /**
     * @var string
     */
    protected $txFeuserserwTraeger;

    /**
     * @var string
     */
    protected $txFeuserserwProjekt;

    /**
     * @var string
     */
    protected $txFeuserserwGender;

    /**
     * Gets the Datenschutz
     *
     * @return boolean
     */
    public function getDatenschutz() {
        return (bool)$this->datenschutz;
    }

    /**
     * Sets the Datenschutz
     *
     * @param boolean $datenschutz
     * @return void
     */
    public function setDatenschutz($datenschutz) {
        $this->datenschutz = (bool)$datenschutz;
    }

    /**
     * Gets the TxFeuserserwTraeger
     *
     * @return string
     */
    public function getTxFeuserserwTraeger() {
        return $this->txFeuserserwTraeger;
    }

    /**
     * Sets the TxFeuserserwTraeger
     *
     * @param string $txFeuserserwTraeger
     * @return void
     */
    public function setTxFeuserserwTraeger($txFeuserserwTraeger) {
        $this->txFeuserserwTraeger = $txFeuserserwTraeger;
    }

    /**
     * Gets the TxFeuserserwProjekt
     *
     * @return string
     */
    public function getTxFeuserserwProjekt() {
        return $this->txFeuserserwProjekt;
    }

    /**
     * Sets the TxFeuserserwProjekt
     *
     * @param string $txFeuserserwProjekt
     * @return void
     */
    public function setTxFeuserserwProjekt($txFeuserserwProjekt) {
        $this->txFeuserserwProjekt = $txFeuserserwProjekt;
    }

    /**
     * Gets the TxFeuserserwGender
     *
     * @return string
     */
    public function getTxFeuserserwGender() {
        return $this->txFeuserserwGender;
    }

    /**
     * Sets the TxFeuserserwGender
     *
     * @param string $txFeuserserwGender
     * @return void
     */
    public function setTxFeuserserwGender($txFeuserserwGender) {
        $this->txFeuserserwGender = $txFeuserserwGender;
    }

}

?>
