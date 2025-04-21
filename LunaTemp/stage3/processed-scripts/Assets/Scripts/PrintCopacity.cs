using _Project.Code.Core.Items.Inventory;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class PrintCopacity : MonoBehaviour
{
    [SerializeField] private TMP_Text _textMeshPro;
    [SerializeField] private ItemInventory itemInventory;

    private void Update()
    {
        _textMeshPro.text = itemInventory.RemainingCapacity.ToString();
    }
}
